import {AssetPhoto} from './page-photo';

const formats=[
  {id:'focused',image:'service-networking-event-photography',en:'A focused event',fr:'Un moment ciblé',time:'A few key hours',timeFr:'Quelques heures clés',desc:'A reception, announcement, launch or awards presentation in one location.',descFr:'Une réception, une annonce, un lancement ou une remise de prix dans un même lieu.',points:['Arrivals, key people and candid interactions','Priority moments planned around your schedule','A concise brief for a single programme'],pointsFr:['Arrivées, personnes clés et échanges spontanés','Temps forts prévus selon votre horaire','Un brief précis pour un programme unique']},
  {id:'half-day',image:'service-conference-photography',en:'A half-day programme',fr:'Une demi-journée',time:'Sessions + connections',timeFr:'Séances et rencontres',desc:'A morning conference, leadership meeting or trade show followed by networking.',descFr:'Un congrès en matinée, une rencontre de direction ou un salon suivi de réseautage.',points:['Speakers, participants and venue details','Time for sponsor and team photographs','Portraits or a reception added to the brief'],pointsFr:['Conférenciers, participants et détails du lieu','Temps prévu pour les commanditaires et les équipes','Portraits ou réception intégrés au brief']},
  {id:'full-day',image:'service-convention-photography',en:'A full event programme',fr:'Un programme complet',time:'Full day or multiple days',timeFr:'Une journée ou plusieurs jours',desc:'A conference, convention or gala programme with several sessions, rooms or venues.',descFr:'Un congrès, un colloque ou un gala avec plusieurs séances, salles ou lieux.',points:['A coverage map for overlapping sessions','Crew and travel planned around the programme','Delivery milestones for each day or priority'],pointsFr:['Un plan pour les séances simultanées','Équipe et déplacements adaptés au programme','Livraison planifiée par journée ou priorité']}
];

export function CoverageGuide({fr=false,compact=false}:{fr?:boolean;compact?:boolean}){
  const base=fr?'/fr':'';
  return <section className="section coverage-section" id="coverage"><div className="section-heading"><div><p className="eyebrow">{fr?'CHOISIR SA COUVERTURE':'FIND YOUR COVERAGE'}</p><h2>{fr?'Un format pour votre programme.':'Start with the shape of your event.'}</h2></div><p>{fr?'Ces formats vous aident à préparer votre demande. Les heures, l’équipe et les livrables seront adaptés à votre événement.':'Use these starting points to build your brief. Hours, crew and deliverables are tailored to your event.'}</p></div><div className="coverage-grid">{formats.map((f,i)=><article className="coverage-card" key={f.id}><AssetPhoto assetKey={f.image} fr={fr}/><div className="coverage-copy"><p className="eyebrow">0{i+1} / {fr?f.timeFr:f.time}</p><h3>{fr?f.fr:f.en}</h3><p>{fr?f.descFr:f.desc}</p><ul>{(fr?f.pointsFr:f.points).map(p=><li key={p}>{p}</li>)}</ul><a className="button outline" href={`${base}/quote/?coverage=${f.id}`}>{fr?'PRÉPARER MON DEVIS':'PLAN MY COVERAGE'}</a></div></article>)}</div><div className="coverage-note"><p>{fr?'Un devis personnalisé selon le lieu, la durée, l’équipe, la retouche et les échéances. Disponibilité et frais de déplacement confirmés avant la réservation.':'Your quote reflects location, duration, crew, editing and deadlines. Availability and travel costs are confirmed before booking.'}</p>{compact&&<a href={base+'/coverage/'}>{fr?'COMPARER LES LIVRABLES':'COMPARE DELIVERABLES'}</a>}</div></section>;
}

export function Deliverables({fr=false}:{fr?:boolean}){
  const rows=fr?[
    ['Préparation','Programme, personnes prioritaires, consignes de marque et accès au lieu.','Joignez un programme provisoire et les moments incontournables.'],
    ['Couverture','Horaires, nombre de photographes, salles simultanées et déplacements.','Signalez les activités qui se déroulent en même temps.'],
    ['Images finales','Sélection, retouche, formats de fichiers et organisation de la galerie.','Précisez les usages : Web, impression, communications internes ou presse.'],
    ['Délais','Date de livraison et éventuelle sélection urgente pour les médias.','Indiquez toute échéance le jour même ou le lendemain.'],
    ['Utilisation','Droits d’utilisation, diffusion aux partenaires et restrictions de confidentialité.','Identifiez les destinataires, les embargos et les autorisations nécessaires.']
  ]:[
    ['Planning','Run of show, priority people, brand guidance and venue access.','Share a working schedule and the moments that must be covered.'],
    ['Coverage','Hours, photographer count, simultaneous rooms and travel.','Flag any activities taking place at the same time.'],
    ['Final images','Selection, editing, file formats and gallery organization.','Tell us where images will appear: web, print, internal communications or press.'],
    ['Delivery','The final delivery date and any urgent media selects.','Include same-day or next-day deadlines in your brief.'],
    ['Usage','Image usage rights, partner distribution and confidentiality restrictions.','Identify recipients, embargoes and any required permissions.']
  ];
  return <section className="section deliverables-section" id="deliverables"><div className="section-heading"><div><p className="eyebrow">{fr?'UNE PROPOSITION CLAIRE':'A CLEAR PROPOSAL'}</p><h2>{fr?'Savoir ce qui est prévu.':'Know what your quote covers.'}</h2></div><p>{fr?'Les points à préciser avant de réserver, pour que vos images répondent aux besoins de votre équipe.':'The details to agree before booking, so your images fit the way your team will use them.'}</p></div><div className="delivery-table" role="region" aria-label={fr?'Éléments du devis':'Quote checklist'} tabIndex={0}><table><thead><tr><th scope="col">{fr?'Élément':'Item'}</th><th scope="col">{fr?'À confirmer dans le devis':'Confirm in your quote'}</th><th scope="col">{fr?'Pour bien préparer votre demande':'What to share with us'}</th></tr></thead><tbody>{rows.map(([a,b,c])=><tr key={a}><th scope="row">{a}</th><td>{b}</td><td>{c}</td></tr>)}</tbody></table></div><div className="delivery-addons"><h3>{fr?'Compléter la couverture':'Build on your coverage'}</h3><div className="tag-links">{[['on-site-headshots','On-site headshots','Portraits sur place'],['event-videography','Event video','Vidéo événementielle'],['same-day-event-photo-editing','Same-day selects','Sélection le jour même'],['sponsor-photography','Sponsor coverage','Photos des commanditaires']].map(([slug,en,f])=><a key={slug} href={`${fr?'/fr':''}/services/${slug}/`}>{fr?f:en}</a>)}</div><p className="muted">{fr?'Ces options nécessitent une planification et une confirmation de disponibilité.':'These options require planning and confirmation of availability.'}</p></div></section>;
}

export function ImageUses({fr=false}:{fr?:boolean}){
  const items=fr?[
    ['Communiquer pendant l’événement','Conférenciers, annonces et moments clés pour vos équipes de presse et de médias sociaux.','same-day-event-photo-editing'],
    ['Mettre les partenaires en valeur','Kiosques, affichage et échanges pour documenter la présence de vos commanditaires.','sponsor-photography'],
    ['Préparer la prochaine édition','Ambiance, participation et détails pour vos présentations, invitations et communications.','event-recap-photography']
  ]:[
    ['Share the news','Speakers, announcements and key moments for your press and social teams.','same-day-event-photo-editing'],
    ['Show partner participation','Booths, branding and conversations that document your sponsors’ presence.','sponsor-photography'],
    ['Promote the next event','Atmosphere, attendance and details for presentations, invitations and future campaigns.','event-recap-photography']
  ];
  return <section className="section image-uses"><p className="eyebrow">{fr?'APRÈS L’ÉVÉNEMENT':'AFTER THE EVENT'}</p><h2>{fr?'Des images qui servent vos objectifs.':'Give every image a job to do.'}</h2><div className="steps">{items.map(([h,p,slug],i)=><article key={slug}><small>0{i+1}</small><h3>{h}</h3><p>{p}</p><a href={`${fr?'/fr':''}/services/${slug}/`}>{fr?'VOIR LA COUVERTURE':'EXPLORE COVERAGE'}</a></article>)}</div></section>;
}
