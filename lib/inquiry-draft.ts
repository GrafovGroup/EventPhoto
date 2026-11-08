export const DRAFT_KEY = 'eventphoto-quote-draft-v2';
export const DRAFT_TTL = 2 * 60 * 60 * 1000;
const fields = new Set(['name','email','phone','company','service','eventDate','city','province','coverage','venue','guests','hours','photographers','deliveryDeadline','budget','details','videography','headshots','photoBooth','consent']);
export type InquiryDraft = {id:string; updatedAt:number; values:Record<string,string>; expanded:boolean; fileCount:number; context:string};

export function readDraft(raw:string|null, now=Date.now()):InquiryDraft|null {
  try {
    const d=JSON.parse(raw||'null');
    if(!d||typeof d.id!=='string'||!Number.isFinite(d.updatedAt)||now-d.updatedAt>DRAFT_TTL||d.updatedAt>now+60000||!d.values||typeof d.values!=='object')return null;
    const values:Record<string,string>={};
    for(const [k,v] of Object.entries(d.values))if(fields.has(k)&&typeof v==='string')values[k]=v.slice(0,k==='details'?5000:500);
    return {id:d.id.slice(0,64),updatedAt:d.updatedAt,values,context:typeof d.context==='string'?d.context.slice(0,2000):'',expanded:d.expanded===true,fileCount:Number.isInteger(d.fileCount)?Math.min(3,Math.max(0,d.fileCount)):0};
  } catch {return null;}
}

// Files stay in this browser; the tab-specific draft ID prevents cross-tab reuse.
// Expired records are removed whenever the attachment store is opened.
async function fileStore():Promise<IDBDatabase> {
  return new Promise((resolve,reject)=>{
    const request=indexedDB.open('eventphoto-inquiry-attachments',1);
    request.onupgradeneeded=()=>request.result.createObjectStore('drafts',{keyPath:'id'});
    request.onerror=()=>reject(request.error);
    request.onblocked=()=>reject(new Error('Attachment storage unavailable'));
    request.onsuccess=()=>{
      const db=request.result;
      const transaction=db.transaction('drafts','readwrite');
      const cursor=transaction.objectStore('drafts').openCursor();
      cursor.onsuccess=()=>{const c=cursor.result;if(c){if(Date.now()-c.value.updatedAt>DRAFT_TTL)c.delete();c.continue();}};
      transaction.oncomplete=()=>resolve(db);
      transaction.onerror=()=>{db.close();reject(transaction.error);};
    };
  });
}
export async function saveDraftFiles(id:string,files:File[]) {
  const db=await fileStore();
  try {await new Promise<void>((resolve,reject)=>{
    const tx=db.transaction('drafts','readwrite');
    if(files.length)tx.objectStore('drafts').put({id,files,updatedAt:Date.now()});else tx.objectStore('drafts').delete(id);
    tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error);
  });} finally {db.close();}
}
export async function loadDraftFiles(id:string):Promise<File[]> {
  const db=await fileStore();
  try {return await new Promise<File[]>((resolve,reject)=>{
    const r=db.transaction('drafts').objectStore('drafts').get(id);
    r.onsuccess=()=>resolve(r.result?.files||[]);r.onerror=()=>reject(r.error);
  });} finally {db.close();}
}
