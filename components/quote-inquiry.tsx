'use client';
import {useEffect,useRef,useState} from 'react';
import {useForm,ValidationError} from '@formspree/react';
import {services,provinces} from '@/lib/content';
import {FORMSPREE_ID,inquiryPayload} from '@/lib/formspree';
import {DRAFT_KEY,readDraft,saveDraftFiles,loadDraftFiles} from '@/lib/inquiry-draft';

export function QuoteInquiry({fr=false}:{fr?:boolean}) {
  const [state,send]=useForm(FORMSPREE_ID);
  const [values,setValues]=useState<Record<string,string>>({});
  const [files,setFiles]=useState<File[]>([]);
  const [expanded,setExpanded]=useState(false);
  const [ready,setReady]=useState(false);
  const [busy,setBusy]=useState(false);
  const [fileBusy,setFileBusy]=useState(false);
  const [error,setError]=useState('');
  const [storageWarning,setStorageWarning]=useState(false);
  const [receipt,setReceipt]=useState('');
  const id=useRef('');const context=useRef('');const lock=useRef(false);const form=useRef<HTMLFormElement>(null);const success=useRef<HTMLHeadingElement>(null);
  const update=(name:string,value:string)=>setValues(v=>({...v,[name]:value}));
  useEffect(()=>{
    let alive=true;
    async function restore(){
      let draft=null;try{draft=readDraft(sessionStorage.getItem(DRAFT_KEY));}catch{setStorageWarning(true);}
      id.current=draft?.id||crypto.randomUUID();
      const next={...draft?.values};const query=new URLSearchParams(location.search);context.current=query.toString();
      if(!draft||draft.context!==context.current)for(const key of ['service','city','province','coverage'])if(query.get(key))next[key]=query.get(key)!.slice(0,500);
      if(alive){setValues(next);setExpanded(draft?.expanded||false);}
      if(draft?.fileCount){try{const saved=await loadDraftFiles(draft.id);if(alive){setFiles(saved);if(saved.length!==draft.fileCount)setStorageWarning(true);}}catch{if(alive)setStorageWarning(true);}}
      if(alive)setReady(true);
    }
    restore();return()=>{alive=false;};
  },[]);
  useEffect(()=>{
    if(!ready||receipt)return;
    try{sessionStorage.setItem(DRAFT_KEY,JSON.stringify({id:id.current,updatedAt:Date.now(),values,expanded,fileCount:files.length,context:context.current}));}catch{setStorageWarning(true);}
  },[ready,receipt,values,expanded,files]);
  useEffect(()=>{
    const ctx=(document as any).modelContext;if(!ctx?.registerTool)return;
    const controller=new AbortController();
    Promise.resolve(ctx.registerTool({name:'prepare_eventphoto_inquiry',title:fr?'Préparer une demande de devis':'Prepare photography inquiry',description:'Fill details in the visible form for review. Does not send an inquiry.',inputSchema:{type:'object',properties:{city:{type:'string'},eventDate:{type:'string'},service:{type:'string'}},additionalProperties:false},annotations:{readOnlyHint:false},execute(input:unknown){if(!input||typeof input!=='object'||Object.entries(input).some(([k,v])=>!['city','eventDate','service'].includes(k)||typeof v!=='string'||v.length>120))throw new Error('Invalid inquiry details');setValues(v=>({...v,...input as Record<string,string>}));return {status:'prepared_for_review',fields:input};}},{signal:controller.signal})).catch(()=>{});
    return()=>controller.abort();
  },[fr]);
  useEffect(()=>{
    if(!state.succeeded)return;
    setReceipt(id.current.slice(0,8).toUpperCase());
    try{sessionStorage.removeItem(DRAFT_KEY);}catch{}
    saveDraftFiles(id.current,[]).catch(()=>{});
    window.dispatchEvent(new CustomEvent('eventphoto:conversion',{detail:{kind:'quote',reference:id.current.slice(0,8).toUpperCase()}}));
  },[state.succeeded]);
  useEffect(()=>{if(receipt)success.current?.focus();},[receipt]);
  async function attach(selected:File[]){
    if(selected.length>3||selected.some(f=>!f.size||f.size>5*1024*1024||!(/\.(pdf|jpe?g|png|webp|txt)$/i.test(f.name)))){setError(fr?'Choisissez jusqu’à 3 fichiers PDF, JPG, PNG, WebP ou TXT de 5 Mo chacun.':'Choose up to 3 PDF, JPG, PNG, WebP or TXT files, 5 MB each.');return;}
    setError('');setFiles(selected);setFileBusy(true);
    try{await saveDraftFiles(id.current,selected);}catch{setStorageWarning(true);}finally{setFileBusy(false);}
  }
  async function submit(event:React.FormEvent){
    event.preventDefault();if(lock.current||!ready||fileBusy||state.succeeded)return;
    if(!form.current?.reportValidity())return;
    lock.current=true;setBusy(true);setError('');
    try{
      let attribution={};try{attribution=JSON.parse(sessionStorage.getItem('eventphoto-attribution')||'{}');}catch{}
      await send(inquiryPayload({id:id.current,kind:'quote',values,files,attribution,language:fr?'fr-CA':'en-CA',pageUrl:location.pathname}));
    }catch{setError(fr?'L’envoi n’a pas été confirmé. Vos renseignements sont conservés ici. Réessayez ou écrivez à hire@eventphoto.ca.':'We could not confirm your request. Your details are still here. Retry or email hire@eventphoto.ca.');}
    finally{lock.current=false;setBusy(false);}
  }
  const input=(name:string,label:string,type='text',required=false)=><label className="field" key={name}>{label}{required?' *':''}<input name={name} type={type} required={required} value={values[name]||''} onChange={e=>update(name,e.target.value)} maxLength={type==='number'?undefined:500} min={type==='number'?0:undefined} autoComplete={name==='name'?'name':name==='email'?'email':name==='phone'?'tel':name==='company'?'organization':undefined}/></label>;
  const select=(name:string,label:string,options:string[][],required=false)=><label className="field" key={name}>{label}{required?' *':''}<select name={name} required={required} value={values[name]||''} onChange={e=>update(name,e.target.value)}><option value="">{fr?'Choisir':'Select an option'}</option>{options.map(([v,l])=><option value={v} key={v}>{l}</option>)}</select></label>;
  if(receipt)return <section className="form-shell"><div className="success" role="status"><p className="eyebrow">{fr?'DEMANDE REÇUE':'REQUEST RECEIVED'}</p><h1 ref={success} tabIndex={-1}>{fr?'Merci. Votre événement prend forme.':'Thank you. Let’s plan your coverage.'}</h1><p>{fr?'Votre référence':'Your reference'}: <strong>{receipt}</strong></p><p>{fr?'Nous examinerons votre demande et communiquerons avec vous pour préciser la couverture, les disponibilités et le devis. Votre date sera confirmée séparément.':'We’ll review your brief and contact you about coverage, availability and a tailored quote. Your event date will be confirmed separately.'}</p><a className="button dark" href={fr?'/fr/coverage/':'/coverage/'}>{fr?'EXPLORER LES OPTIONS':'EXPLORE COVERAGE OPTIONS'}</a></div></section>;
  return <section className="form-shell quote-shell"><div className="quote-intro"><div><p className="eyebrow">{fr?'VOTRE PROCHAIN ÉVÉNEMENT':'YOUR NEXT EVENT'}</p><h1>{fr?'Commençons par votre événement.':'Let’s start with your event.'}</h1><p className="muted">{fr?'Vos coordonnées et le lieu suffisent pour commencer. Ajoutez votre date et vos priorités si vous les connaissez. Les champs marqués * sont obligatoires.':'Your contact details and location are enough to start. Add your date and priorities if you know them. Fields marked * are required.'}</p></div><aside><p>{fr?'Vous hésitez sur la couverture?':'Not sure what coverage you need?'}</p><a href={fr?'/fr/coverage/':'/coverage/'}>{fr?'COMPARER LES OPTIONS':'COMPARE COVERAGE'}</a><a href="tel:+18336969996">(833) 696-9996</a></aside></div>
  <form ref={form} action="https://formspree.io/f/mbglqynj" method="POST" encType="multipart/form-data" onSubmit={submit} aria-busy={busy||fileBusy}>
    <fieldset disabled={!ready||busy}><legend className="sr-only">{fr?'Renseignements pour le devis':'Quote details'}</legend><div className="fields">
      {input('name',fr?'Nom complet':'Full name','text',true)}{input('email',fr?'Courriel':'Email','email',true)}
      {select('service',fr?'Type d’événement':'Event type',services.filter(s=>!s.group||s.slug===values.service).map(s=>[s.slug,fr?s.fr:s.name]))}{input('eventDate',fr?'Date de l’événement (si connue)':'Event date (if known)','date')}
      {input('city',fr?'Ville':'City','text',true)}{select('province',fr?'Province ou territoire':'Province or territory',[...provinces.map(p=>[p[0],p[fr?2:1]]),['yukon','Yukon'],['northwest-territories',fr?'Territoires du Nord-Ouest':'Northwest Territories'],['nunavut','Nunavut']],true)}
      <label className="field full">{fr?'Que souhaitez-vous faire photographier? (facultatif)':'What would you like photographed? (optional)'}<textarea name="details" value={values.details||''} maxLength={5000} placeholder={fr?'Congrès, réception, portraits, moments clés…':'Conference, reception, portraits, key moments…'} onChange={e=>update('details',e.target.value)}/></label>
    </div>
    <details className="quote-details" open={expanded} onToggle={e=>setExpanded(e.currentTarget.open)}><summary>{fr?'AJOUTER DES PRÉCISIONS (FACULTATIF)':'ADD PLANNING DETAILS (OPTIONAL)'}<span>{fr?'Lieu, durée, budget, pièces jointes':'Venue, duration, budget, attachments'}</span></summary><div className="fields">
      {input('company',fr?'Entreprise ou organisme':'Company / organization')}{input('phone',fr?'Téléphone':'Phone','tel')}{input('venue',fr?'Lieu de l’événement':'Venue')}{input('guests',fr?'Nombre approximatif d’invités':'Approximate guest count','number')}
      {select('coverage',fr?'Format de couverture':'Coverage format',[['focused',fr?'Moment ciblé':'Focused event'],['half-day',fr?'Demi-journée':'Half-day programme'],['full-day',fr?'Journée complète ou plusieurs jours':'Full-day or multi-day'],['discuss',fr?'À définir ensemble':'Help me choose']])}
      {input('hours',fr?'Heures de couverture estimées':'Estimated coverage hours','number')}{input('photographers',fr?'Nombre de photographes (si connu)':'Photographers (if known)','number')}{input('deliveryDeadline',fr?'Date de livraison souhaitée':'Delivery deadline','date')}
      {select('budget',fr?'Budget estimé':'Budget range',[['discuss',fr?'À définir ensemble':'Let’s discuss'],['under-1000',fr?'Moins de 1 000 $ CA':'Under CAD $1,000'],['1000-2500',fr?'1 000 à 2 500 $ CA':'CAD $1,000–2,500'],['2500-5000',fr?'2 500 à 5 000 $ CA':'CAD $2,500–5,000'],['5000-plus',fr?'5 000 $ CA et plus':'CAD $5,000+']])}
      <div className="field full"><span>{fr?'Services complémentaires':'Additional coverage'}</span>{[['videography','Video','Vidéo'],['headshots','On-site headshots','Portraits sur place'],['photoBooth','Photo booth','Borne photo']].map(([k,en,f])=><label className="checkrow" key={k}><input type="checkbox" checked={values[k]==='yes'} onChange={e=>update(k,e.target.checked?'yes':'no')}/>{fr?f:en}</label>)}</div>
      <label className="field full">{fr?'Programme ou brief':'Event schedule or brief'}<input type="file" accept=".pdf,.jpg,.jpeg,.png,.webp,.txt" multiple onChange={e=>{attach(Array.from(e.target.files||[]));e.target.value='';}}/><span className="muted">PDF, JPG, PNG, WebP, TXT · 3 × 5 {fr?'Mo':'MB'}</span></label>
      {files.length>0&&<ul className="attachment-list field full">{files.map((f,i)=><li key={f.name+i}><span>{f.name}</span><button type="button" onClick={()=>attach(files.filter((_,n)=>n!==i))}>{fr?'RETIRER':'REMOVE'}</button></li>)}</ul>}
    </div></details>
    <label className="checkrow consent-row"><input type="checkbox" required checked={values.consent==='yes'} onChange={e=>update('consent',e.target.checked?'yes':'no')}/><span>{fr?'J’accepte que mes renseignements servent au traitement de cette demande.':'I agree to the use of my information to handle this request.'} <a href={fr?'/fr/privacy/':'/privacy/'}>{fr?'Confidentialité':'Privacy'}</a></span></label>
    <div hidden aria-hidden="true"><label>Website confirmation<input name="websiteConfirmation" tabIndex={-1} autoComplete="off" value={values.websiteConfirmation||''} onChange={e=>update('websiteConfirmation',e.target.value)}/></label></div>
    {(error||state.errors)&&<div role="alert" className="error">{error|| (fr?'L’envoi n’a pas été confirmé. Réessayez ou écrivez à hire@eventphoto.ca.':'Your request was not confirmed. Retry or email hire@eventphoto.ca.')}<ValidationError errors={state.errors}/></div>}
    {storageWarning&&<p className="form-note" role="status">{fr?'Votre navigateur limite la sauvegarde du brouillon. Vérifiez vos renseignements et pièces jointes après un changement de langue.':'Your browser limits draft storage. Check your details and attachments after changing languages.'}</p>}
    <div className="quote-submit"><button className="button" type="submit" disabled={!ready||busy||fileBusy}>{busy?(fr?'ENVOI EN COURS':'SENDING'):fr?'DEMANDER MON DEVIS':'REQUEST MY QUOTE'}</button><p>{fr?'Nous préciserons la couverture et les disponibilités avec vous. L’envoi ne confirme pas une réservation.':'We’ll help confirm the coverage and availability. Sending a request does not confirm a booking.'}</p></div>
    </fieldset>
    <p className="form-note">{fr?'Vous préférez le courriel? ':'Prefer email? '}<a href="mailto:hire@eventphoto.ca">hire@eventphoto.ca</a></p>
  </form></section>;
}
