export const showcaseImages = {
 home: [['original-exhibition','Your brand in action','Votre marque en action','trade-show-photography'],['original-portraits','Portraits with purpose','Des portraits qui comptent','on-site-headshots'],['audience','Every perspective','Tous les regards','corporate-event-photography']],
 services: [['reception','Beyond the sessions','Au-delà des séances','networking-event-photography'],['panel','Ideas in conversation','Les idées en discussion','panel-discussion-photography'],['speaker','People in the spotlight','Les personnes à l’honneur','speaker-portrait-photography']],
 industries: [['connections','Your people. Your story.','Vos équipes. Votre histoire.','corporate-event-photography'],['conference','An audience engaged','Un public engagé','conference-photography']]
} as const;
export type ShowcaseKind=keyof typeof showcaseImages;
export const showcaseKey=(kind:ShowcaseKind,key:string)=>key.startsWith('original-')?key:`showcase-${kind}-${key}`;
export const showcaseKeys=(kind:ShowcaseKind)=>showcaseImages[kind].map(item=>showcaseKey(kind,item[0]));
