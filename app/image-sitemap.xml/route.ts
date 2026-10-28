import {services} from '@/lib/content';
import {showcaseKeys} from '@/lib/b2b-showcase';
import {origin,enPaths} from '@/lib/pages';
import {pageImageKey,imagePath} from '@/components/page-photo';

const gallery=['corporate','conference','tradeshow','gala','festival','activation','headshots','private'];
export function GET(){
  const entries=enPaths.map(path=>{
    const keys=path==='/'?['home-hero','home-corporate','home-conference','home-gala','home-canada']:[pageImageKey(path)];
    if(path==='/')keys.push(...showcaseKeys('home'));
    if(path==='/services/')keys.push(...showcaseKeys('services'),...services.map(s=>'service-'+s.slug));
    if(path==='/industries/')keys.push(...showcaseKeys('industries'));
    const images=keys.map(k=>origin+imagePath(k));
    if(path==='/portfolio/')images.push(...gallery.map(k=>`${origin}/images/${k}-1600.webp`));
    return `<url><loc>${origin}${path}</loc>${images.map(src=>`<image:image><image:loc>${src}</image:loc></image:image>`).join('')}</url>`;
  });
  return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">'+entries.join('')+'</urlset>',{headers:{'Content-Type':'application/xml'}});
}
