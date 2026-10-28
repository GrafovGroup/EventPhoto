import {build} from 'esbuild';
import {mkdtempSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
const dir=mkdtempSync(join(tmpdir(),'eventphoto-audit-'));
const entry=`
import assert from 'node:assert/strict';
import {existsSync} from 'node:fs';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {ContentPage} from './components/content-page';
import {Home} from './components/site';
import {allPaths,enPaths,frPaths,origin,getPage} from './lib/pages';
import {cities,industries,services} from './lib/content';
import {frenchPlanning} from './lib/french-service';
import {generateMetadata} from './app/[...slug]/page';
import {GET as sitemap} from './app/sitemap.xml/route';
const errors=[]; let links=0, images=0;
assert.equal(frPaths.length,enPaths.length);
assert.equal(new Set(allPaths).size,allPaths.length);
for(const c of cities){assert.ok(c.introFr,c.slug+' French intro');assert.ok(c.planningFr,c.slug+' French planning');if(c.brief)assert.ok(c.briefFr,c.slug+' French brief');}
for(const i of industries)assert.ok(i.introFr,i.slug+' French industry');
for(const s of services)assert.ok(s.planningFr||frenchPlanning[s.slug],s.slug+' French planning');
for(const path of allPaths){
 globalThis.auditPath=path;
 try{
 const html=renderToStaticMarkup(path==='/'||path==='/fr/'?<Home fr={path==='/fr/'}/>:<ContentPage path={path}/>);
 assert.equal((html.match(/<h1(?: |>|\\n)/g)||[]).length,1,path+' must have one h1');
 for(const [,href] of html.matchAll(/href="([^"#]+)"/g)){
 if(!href.startsWith('/')||href.startsWith('//'))continue;
 const target=href.split('?')[0];links++;
 if(!allPaths.includes(target)&&!existsSync('public'+target))errors.push(path+' broken link '+target);
 if(path.startsWith('/fr/')&&allPaths.includes(target)&&!target.startsWith('/fr/')&&target!==path.slice(3))errors.push(path+' unexpected English link '+target);
 }
 for(const [,src] of html.matchAll(/<img[^>]+src="([^"]+)"/g)){images++;if(src.startsWith('/')&&!existsSync('public'+src))errors.push(path+' missing image '+src);}
 for(const [,json] of html.matchAll(/<script type="application\\/ld\\+json">([\\s\\S]*?)<\\/script>/g))JSON.parse(json);
 if(path!=='/'){
 const meta=await generateMetadata({params:Promise.resolve({slug:path.split('/').filter(Boolean)})});
 assert.equal(meta.alternates.canonical,origin+path);
 assert.equal(meta.alternates.languages['fr-CA'],origin+(path.startsWith('/fr/')?path:'/fr'+path));
 assert.ok(meta.description);
 if(path.startsWith('/fr/'))assert.ok(!/ in Toronto|Plan your .* event coverage/.test(meta.title+' '+meta.description));
 }
 }catch(e){errors.push(path+': '+e.message)}
}
const xml=await sitemap().text();assert.equal((xml.match(/<url>/g)||[]).length,allPaths.length);
assert.deepEqual(errors,[]);
console.log(JSON.stringify({routes:allPaths.length,english:enPaths.length,french:frPaths.length,services:services.length,cities:cities.length,industries:industries.length,links,images,checks:'render, internal links, language routing, image files, headings, JSON-LD, metadata, sitemap'},null,2));
`;
try{
 await build({stdin:{contents:entry,resolveDir:process.cwd(),loader:'tsx'},outfile:join(dir,'audit.mjs'),bundle:true,platform:'node',format:'esm',jsx:'automatic',packages:'external',alias:{'@':process.cwd()},plugins:[{name:'navigation-stub',setup(b){b.onResolve({filter:/^next\/navigation$/},()=>({path:'nav',namespace:'stub'}));b.onLoad({filter:/.*/,namespace:'stub'},()=>({contents:'export const usePathname=()=>globalThis.auditPath; export const notFound=()=>{throw new Error("Not found")};',loader:'js'}));}}]});
 // Resolve runtime packages from this checkout, while keeping generated test output temporary.
 const {symlinkSync}=await import('node:fs');symlinkSync(join(process.cwd(),'node_modules'),join(dir,'node_modules'),'dir');
 await import(join(dir,'audit.mjs'));
}finally{rmSync(dir,{recursive:true,force:true});}
