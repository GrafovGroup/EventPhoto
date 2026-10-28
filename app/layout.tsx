import type {Metadata} from 'next';
import './globals.css';
import {headers} from 'next/headers';
import {origin} from '@/lib/pages';
export const metadata:Metadata={title:'EventPhoto.ca | Event Photography Across Canada',description:'Professional event photography for corporate events, conferences, trade shows and celebrations across Canada. Tell us about your event and request a tailored quote.',icons:{icon:'/favicon.svg'},verification:{google:'cekGWpeOz0_F0EyENMX72WpP-zB1F62630UyhLtG2Rw',other:{'msvalidate.01':'8540AF3FE8C8197267E84BBE602115F7'}}};
export default async function Layout({children}:{children:React.ReactNode}){const fr=(await headers()).get('x-site-language')==='fr';return <html lang={fr?'fr-CA':'en-CA'}><body><a className="skip-link" href="#page-main">{fr?'Aller au contenu':'Skip to content'}</a>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Organization",name:"EventPhoto.ca",url:origin,logo:origin+"/brand/eventphoto-motion-white.png",email:"hire@eventphoto.ca",telephone:"+18336969996",areaServed:{"@type":"Country",name:"Canada"}})}}/></body></html>}
