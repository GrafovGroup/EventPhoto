import {Home} from '@/components/site';
import {origin} from '@/lib/pages';
export const metadata={alternates:{canonical:origin+'/',languages:{'en-CA':origin+'/','fr-CA':origin+'/fr/','x-default':origin+'/'}},openGraph:{title:'EventPhoto.ca | Event Photography Across Canada',description:'Professional photographers for corporate events, conferences, galas and celebrations across Canada.',url:origin+'/',type:'website',locale:'en_CA',siteName:'EventPhoto.ca',images:[{url:origin+'/images/pages/home-hero-1600.webp'}]},twitter:{card:'summary_large_image',images:[origin+'/images/pages/home-hero-1600.webp'],title:'EventPhoto.ca | Event Photography Across Canada'}};
export default function Page(){return <Home/>}
