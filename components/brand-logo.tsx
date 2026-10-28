export function BrandLogo({fr=false}:{fr?:boolean}){
  return <a className="brand-logo" href={fr?'/fr/':'/'} aria-label={fr?'EventPhoto — Accueil':'EventPhoto — Home'}><img src="/brand/eventphoto-motion-white.png" alt="EVENTPHOTO" width="2172" height="724"/></a>;
}
