import {Header,Footer} from '@/components/site';
import {headers} from 'next/headers';
export default async function NotFound(){const fr=(await headers()).get('x-site-language')==='fr';return <><Header fr={fr}/><main id="page-main" className="section"><p className="eyebrow">404 / {fr?'HORS CADRE':'OUT OF FRAME'}</p><h1 style={{fontSize:60}}>{fr?'Cette page est introuvable.':'This page isn’t here.'}</h1><a href={fr?'/fr/':'/'} className="button dark" style={{marginTop:30}}>{fr?'RETOUR À L’ACCUEIL':'RETURN HOME'}</a></main><Footer fr={fr}/></>}
