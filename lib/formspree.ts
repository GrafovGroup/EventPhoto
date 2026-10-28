export const FORMSPREE_ID='mbglqynj';
export const CONTACT_EMAIL='hire@eventphoto.ca';
export function inquiryPayload({id,kind,values,files,attribution,language,pageUrl}:{id:string;kind:'quote'|'partner';values:Record<string,string>;files:File[];attribution:Record<string,unknown>;language:string;pageUrl:string}){
 if(values.websiteConfirmation)throw new Error('Invalid submission');
 if(!values.name?.trim()||!/^\S+@\S+\.\S+$/.test(values.email||'')||!values.city?.trim()||!values.province||values.consent!=='yes')throw new Error('Missing required details');
 if(kind==='partner'&&!/^https?:\/\//i.test(values.portfolio||''))throw new Error('Missing portfolio');
 if(files.length>3||files.some(f=>f.size===0||f.size>5*1024*1024||!(/\.(pdf|jpe?g|png|webp|txt)$/i.test(f.name))))throw new Error('Invalid attachment');
 const data=new FormData();
 for(const [key,value] of Object.entries(values)){if(key!=='websiteConfirmation')data.set(key,value)}
 data.set('email',values.email.trim());data.set('name',values.name.trim());
 data.set('reference',id.slice(0,8).toUpperCase());data.set('request_id',id);data.set('inquiry_type',kind);data.set('language',language);data.set('page',pageUrl);
 data.set('subject',`EventPhoto — ${kind==='quote'?'Quote request':'Photographer application'} — ${values.city}`);
 data.set('message',Object.entries(values).filter(([key,value])=>key!=='websiteConfirmation'&&value).map(([key,value])=>`${key.replace(/([A-Z])/g,' $1')}: ${value}`).join('\n'));
 for(const key of ['landingPage','referrer','utm_source','utm_medium','utm_campaign','utm_term','utm_content']){const value=attribution[key];if(typeof value==='string')data.set(key,value.slice(0,1500))}
 data.set('_gotcha','');files.forEach((file,index)=>data.append(`attachment${index+1}`,file));return data;
}
