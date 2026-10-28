export const showcaseImages = {
 home: [['stage','The main stage','La scène principale','conference-photography'],['networking','Connections that matter','Des échanges qui comptent','networking-event-photography'],['audience','Every perspective','Tous les regards','corporate-event-photography']],
 services: [['reception','Beyond the sessions','Au-delà des séances','networking-event-photography'],['panel','Ideas in conversation','Les idées en discussion','panel-discussion-photography'],['speaker','People in the spotlight','Les personnes à l’honneur','speaker-portrait-photography']],
 industries: [['connections','Your people. Your story.','Vos équipes. Votre histoire.','corporate-event-photography'],['conference','An audience engaged','Un public engagé','conference-photography']]
} as const;
export type ShowcaseKind=keyof typeof showcaseImages;
export const showcaseKeys=(kind:ShowcaseKind)=>showcaseImages[kind].map(item=>`showcase-${kind}-${item[0]}`);
