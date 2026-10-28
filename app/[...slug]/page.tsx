import {AssetPhoto,PhotoCredits,pageImageKey,imagePath} from '@/components/page-photo';
import {notFound} from 'next/navigation';
import {allPaths,enPaths,frPaths,getPage,origin} from '@/lib/pages';
import {ContentPage,HomeExtras,QuoteCTA,ServiceCards} from '@/components/content-page';
import {Header,Footer,Home} from '@/components/site';
import {VisitTracker} from '@/components/interactive';
export async function generateMetadata({params}:{params:Promise<{slug:string[]}>}){const {slug}=await params;const path='/'+slug.join('/')+'/';if(!allPaths.includes(path))return {title:'Page not found | EventPhoto.ca',robots:{index:false}};const page=getPage(path);const en=page.fr?path.slice(3):path;const fr='/fr'+en;return {title:page.title+' | EventPhoto.ca',description:page.desc,alternates:{canonical:origin+path,languages:frPaths.includes(fr)?{'en-CA':origin+en,'fr-CA':origin+fr,'x-default':origin+en}:undefined},openGraph:{title:page.title,description:page.desc,url:origin+path,type:'website',locale:page.fr?'fr_CA':'en_CA',siteName:'EventPhoto.ca',images:[{url:origin+imagePath(pageImageKey(path))}]},twitter:{card:'summary_large_image',title:page.title,description:page.desc,images:[origin+imagePath(pageImageKey(path))]}}}
export default async function Page({params}:{params:Promise<{slug:string[]}>}){const {slug}=await params;const path='/'+slug.join('/')+'/';if(!allPaths.includes(path))notFound();if(path==='/fr/')return <Home fr/>;return <div lang={path.startsWith('/fr/')?'fr-CA':'en-CA'}><ContentPage path={path}/></div>}
