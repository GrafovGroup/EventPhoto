'use client';
import {usePathname} from 'next/navigation';
import {frPaths} from '@/lib/pages';
export function LanguageLink({fr=false}:{fr?:boolean}){const path=usePathname()||'/';const normalized=path.endsWith('/')?path:path+'/';const target=fr?normalized.replace(/^\/fr\//,'/'):frPaths.includes('/fr'+normalized)?'/fr'+normalized:'/fr/';return <a href={target} lang={fr?'en-CA':'fr-CA'} hrefLang={fr?'en-CA':'fr-CA'}>{fr?'EN':'FR'}</a>}
