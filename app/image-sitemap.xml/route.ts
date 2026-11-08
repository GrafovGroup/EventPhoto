import {galleryImages} from '@/lib/gallery';
import {serviceGroups} from '@/components/service-directory';
import {showcaseKeys} from '@/lib/b2b-showcase';
import {origin,enPaths} from '@/lib/pages';
import {pageImageKey,imagePath} from '@/components/page-photo';


export function GET(){
  const entries=enPaths.map(path=>{
    const keys=path==='/'?['home-hero','home-corporate','home-conference','home-gala','home-canada']:[pageImageKey(path)];
    if(path==='/'||path==='/coverage/')keys.push('service-networking-event-photography','service-conference-photography','service-convention-photography');
    if(path==='/services/')keys.push(...serviceGroups.map(g=>g.image));
    if(path==='/industries/')keys.push(...showcaseKeys('industries'));
    if(path==='/portfolio/')keys.push(...galleryImages.map(i=>i[1]));
    const images=[...new Set(keys.map(k=>origin+imagePath(k)))];
    return `<url><loc>${origin}${path}</loc>${images.map(src=>`<image:image><image:loc>${src}</image:loc></image:image>`).join('')}</url>`;
  });
  return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">'+entries.join('')+'</urlset>',{headers:{'Content-Type':'application/xml'}});
}
