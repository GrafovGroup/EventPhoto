import {services,cities,industries} from '@/lib/content';
import {pageImages} from '@/lib/page-images';

export function pageImageKey(path:string){
  const parts=path.replace(/^\/fr(?=\/)/,'').split('/').filter(Boolean);
  if(!parts.length)return 'home-hero';
  if(parts[0]==='services'&&parts[1])return 'service-'+parts[1];
  if(parts[0]==='industries'&&parts[1])return 'industry-'+parts[1];
  if(parts[0]==='locations'&&parts[3])return 'toronto-'+({'corporate-event-photography':'corporate','conference-photography':'conference','trade-show-photography':'trade-show'} as Record<string,string>)[parts[3]];
  if(parts[0]==='locations'&&parts[2])return 'city-'+parts[2];
  if(parts[0]==='locations'&&parts[1])return 'province-'+parts[1];
  if(parts[0]==='photographers'&&parts[1]==='apply')return 'page-apply';
  return 'page-'+parts[0];
}

export function imagePath(key:string,width=1600){return `/images/pages/${pageImages[key]?.fileKey||key}-${width}.webp`;}

export function AssetPhoto({assetKey,hero=false,fr=false}:{assetKey:string;hero?:boolean;fr?:boolean}){
  const asset=pageImages[assetKey];
  if(!asset)throw new Error('Missing page photograph: '+assetKey);
  return <img data-photo-key={assetKey} src={imagePath(assetKey,hero?1600:800)} srcSet={`${imagePath(assetKey,800)} 800w, ${imagePath(assetKey)} 1600w`} sizes={assetKey==='home-hero'?'100vw':hero?'(max-width: 850px) 100vw, 50vw':'(max-width: 540px) 100vw, 33vw'} alt={fr?(asset.altFr||services.find(s=>assetKey==='service-'+s.slug)?.fr||cities.find(c=>assetKey==='city-'+c.slug)?.name||industries.find(i=>assetKey==='industry-'+i.slug)?.fr||'Photographie événementielle'):asset.alt} style={asset.objectPosition?{objectPosition:asset.objectPosition}:asset.height>asset.width?{objectPosition:'center 28%'}:undefined} width={asset.width} height={asset.height} loading={hero?'eager':'lazy'} fetchPriority={hero?'high':'auto'}/>;
}

export function PagePhoto({path,hero=false,fr=false}:{path:string;hero?:boolean;fr?:boolean}){
  return <AssetPhoto assetKey={pageImageKey(path)} hero={hero} fr={fr}/>;
}
