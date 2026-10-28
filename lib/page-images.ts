import {originalImagery} from './original-imagery';
export type PageImage={alt:string;width:number;height:number;source:string;author:string;license:string;licenseUrl:string;altFr?:string;fileKey?:string;requiresCredit?:boolean;objectPosition?:string};
export const pageImages:Record<string,PageImage>={
  "home-canada": {
    "alt": "People mingling at an indoor event with warm lighting",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/people-mingling-at-an-indoor-event-with-warm-lighting-OsuDfn4vtLA",
    "author": "Olena Kholina",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "page-quote": {
    "alt": "selective focus photography of people sitting on chairs while writing on notebooks",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/selective-focus-photography-of-people-sitting-on-chairs-while-writing-on-notebooks-Hb6uWq0i4MI",
    "author": "The Climate Reality Project",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "toronto-conference": {
    "alt": "Attendees seated at the Collision conference in Toronto",
    "width": 2784,
    "height": 1856,
    "source": "https://commons.wikimedia.org/wiki/File:John_Tory_at_Collision_Conference_2022_ENX_8861_(52161526458).jpg",
    "author": "Collision Conf",
    "license": "CC BY 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.0"
  },
  "industry-corporate": {
    "alt": "Team members collaborating around laptops in an office",
    "width": 2200,
    "height": 1467,
    "source": "https://unsplash.com/photos/man-standing-in-front-of-people-sitting-beside-table-with-laptop-computers-gMsnXqILjp4",
    "author": "Campaign Creators",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "industry-conferences-conventions": {
    "alt": "Audience seated inside a large conference auditorium",
    "width": 4307,
    "height": 2871,
    "source": "https://commons.wikimedia.org/wiki/File:Audience_view_inside_main_auditorium_-_Wikimania_2026_-_Paris_by_@JJxFile_0073_17.jpg",
    "author": "Jorge Jaramillo",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
  },
  "industry-universities": {
    "alt": "Graduates gathered for a university ceremony",
    "width": 2736,
    "height": 1824,
    "source": "https://commons.wikimedia.org/wiki/File:University_graduation_(Unsplash).jpg",
    "author": "Faustin Tuyambaze tfaustin",
    "license": "CC0",
    "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en"
  },
  "industry-government": {
    "alt": "Officials speaking at a press conference in Canada",
    "width": 2500,
    "height": 1667,
    "source": "https://commons.wikimedia.org/wiki/File:DHS_Secretary_Alejandro_Mayorkas_Participates_in_Press_Conference_in_Canada_(52853889007).jpg",
    "author": "U.S. Department of Homeland Security (DHS)",
    "license": "Public domain",
    "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/"
  },
  "industry-nonprofits": {
    "alt": "Volunteers organizing food bank donations",
    "width": 3273,
    "height": 2114,
    "source": "https://commons.wikimedia.org/wiki/File:Volunteers_assist_food_bank_DVIDS1099796.jpg",
    "author": "Petty Officer 3rd Class Robert Brazzell",
    "license": "Public domain",
    "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/"
  },
  "industry-festivals": {
    "alt": "Festival audience gathered at an outdoor stage",
    "width": 2808,
    "height": 1872,
    "source": "https://commons.wikimedia.org/wiki/File:Crowd,_I_Love_You_stage,_Positivus_Music_Festival,_Latvia_2014-_(17824546671).jpg",
    "author": "Anna Hanks from Austin, Texas, USA",
    "license": "CC BY 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.0"
  },
  "industry-marketing-pr-agencies": {
    "alt": "Presenter speaking at a social media marketing conference",
    "width": 4912,
    "height": 2760,
    "source": "https://commons.wikimedia.org/wiki/File:Sally_Hogshead_Keynote_Presentation_-_SMMW13.jpg",
    "author": "toprankonlinemarketing",
    "license": "CC BY 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.0"
  },
  "industry-venues": {
    "alt": "Banquet tables arranged in a grand hotel ballroom",
    "width": 3120,
    "height": 2080,
    "source": "https://commons.wikimedia.org/wiki/File:Puri_Bali_Grand_Ballroom_at_Paradisus_by_Meli%C3%A1_Bali.jpg",
    "author": "Paradisus Bali",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
  },
  "province-ontario": {
    "alt": "people inside conference",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/people-inside-conference-cuKJre3nyYc",
    "author": "Jakob Dalbj\u00f6rn",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "province-alberta": {
    "alt": "audience in a conference",
    "width": 1800,
    "height": 1013,
    "source": "https://unsplash.com/photos/audience-in-a-conference-EVgsAbL51Rk",
    "author": "Stem List",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "province-quebec": {
    "alt": "People seated at tables in a large hall watching a presentation on stage",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/people-watching-presentation-in-large-hall-rE9vgD_TXgM",
    "author": "MD Duran",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "province-manitoba": {
    "alt": "woman making speech in front of people sitting on individual chairs",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/woman-making-speech-in-front-of-people-sitting-on-individual-chairs-CiO3eBBxqJA",
    "author": "Evangeline Shaw",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "province-nova-scotia": {
    "alt": "Speaker presenting to large audience in auditorium",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/speaker-presenting-to-large-audience-in-auditorium-_96edJ8IVC4",
    "author": "Marwen Larafa",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "province-new-brunswick": {
    "alt": "people sitting on chair inside room",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/people-sitting-on-chair-inside-room-ID1yWa1Wpx0",
    "author": "Wan San Yip",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "province-newfoundland-and-labrador": {
    "alt": "a room filled with lots of tables and chairs",
    "width": 1800,
    "height": 1201,
    "source": "https://unsplash.com/photos/a-room-filled-with-lots-of-tables-and-chairs-Uhfb85y_B-U",
    "author": "Compagnons",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "province-prince-edward-island": {
    "alt": "Crowd at an exhibition with booths and displays",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/crowd-at-an-exhibition-with-booths-and-displays-NXhweP5ShCg",
    "author": "Trans Russia",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "page-services": {
    "alt": "Photographer covering an event with a professional camera",
    "width": 2592,
    "height": 1728,
    "source": "https://commons.wikimedia.org/wiki/File:Photographer_working_on_event.jpg",
    "author": "KelvinJM",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
  },
  "page-locations": {
    "alt": "Annual Meeting 2019",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/annual-meeting-2019-ysbTWw4hrG4",
    "author": "Evangeline Shaw",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "page-industries": {
    "alt": "Conference attendees networking in a lobby",
    "width": 2592,
    "height": 1728,
    "source": "https://commons.wikimedia.org/wiki/File:Audience_networking_in_the_lobby_(22311151312).jpg",
    "author": "Cre8con",
    "license": "CC BY-SA 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0"
  },
  "page-photographers": {
    "alt": "Press photographers covering a conference",
    "width": 3008,
    "height": 1692,
    "source": "https://commons.wikimedia.org/wiki/File:Press_photographers,_2016_Labour_Party_Conference.jpg",
    "author": "Rwendland",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
  },
  "page-portfolio": {
    "alt": "Blue-lit stage inside a concert venue",
    "width": 3000,
    "height": 2000,
    "source": "https://commons.wikimedia.org/wiki/File:Le_Badaboum_Paris_concert_stage.jpg",
    "author": "Shawndeney",
    "license": "CC0",
    "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en"
  },
  "province-british-columbia": {
    "alt": "a group of people sitting in a room with a large screen",
    "width": 1800,
    "height": 1350,
    "source": "https://unsplash.com/photos/a-group-of-people-sitting-in-a-room-with-a-large-screen-LTxIthMUjRs",
    "author": "Andy Wang",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "province-saskatchewan": {
    "alt": "a group of people in a room with a projector screen",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/a-group-of-people-in-a-room-with-a-projector-screen-1-aA2Fadydc",
    "author": "Quilia",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "industry-trade-shows": {
    "alt": "Visitors gathered around a trade show exhibitor booth",
    "width": 2200,
    "height": 1467,
    "source": "https://unsplash.com/photos/a-group-of-people-standing-around-a-booth-IzLatgY17Hs",
    "author": "Jonny Gios",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "home-hero": {
    "alt": "A panel discussion on a stage in a large auditorium with an audience",
    "width": 2200,
    "height": 1650,
    "source": "https://unsplash.com/photos/panel-discussion-in-large-auditorium-dJICd7b_LlE",
    "author": "Product School",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "home-corporate": {
    "alt": "people sitting on chair in front of table while holding pens during daytime",
    "width": 2200,
    "height": 1467,
    "source": "https://unsplash.com/photos/people-sitting-on-chair-in-front-of-table-while-holding-pens-during-daytime-KdeqA3aTnBY",
    "author": "Dylan Gillis",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "home-conference": {
    "alt": "An audience watching a speaker on a bright screen in a dark room",
    "width": 2200,
    "height": 1468,
    "source": "https://unsplash.com/photos/audience-watching-speaker-on-bright-screen--NXNaE9lu6w",
    "author": "Kevin Gonzalez",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "home-gala": {
    "alt": "Gala event with a stage and seated guests",
    "width": 2200,
    "height": 1650,
    "source": "https://unsplash.com/photos/gala-event-with-a-stage-and-seated-guests-p2FsFMxEWfM",
    "author": "Andy Wang",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "page-apply": {
    "alt": "person writing on glass whiteboard with diagrams",
    "width": 1800,
    "height": 1350,
    "source": "https://unsplash.com/photos/person-writing-on-glass-whiteboard-with-diagrams-5Q07sS54D0Q",
    "author": "Kvalifik",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "toronto-corporate": {
    "alt": "five person standing while talking each other",
    "width": 2200,
    "height": 1467,
    "source": "https://unsplash.com/photos/five-person-standing-while-talking-each-other-ZDN-G1xBWHY",
    "author": "Antenna",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "toronto-trade-show": {
    "alt": "a group of people standing around a trade show",
    "width": 2200,
    "height": 1467,
    "source": "https://unsplash.com/photos/a-group-of-people-standing-around-a-trade-show-jSniVrdhDtc",
    "author": "Jonny Gios",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "industry-hospitality": {
    "alt": "An elegant restaurant with buffet tables and large windows",
    "width": 2200,
    "height": 1650,
    "source": "https://unsplash.com/photos/an-elegant-restaurant-with-buffet-tables-and-large-windows-v2CrrVbgu2A",
    "author": "Aritra Neogi",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "industry-event-planners": {
    "alt": "Elegant tables set with colorful floral arrangements for an event",
    "width": 2200,
    "height": 1469,
    "source": "https://unsplash.com/photos/elegant-tables-set-with-colorful-floral-arrangements-for-an-event-rJWykl03fbA",
    "author": "Michael Kyule",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "industry-retail-brand-activations": {
    "alt": "Woman in white dress walks on stage",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/woman-in-white-dress-walks-on-stage-3WiyjrBRSao",
    "author": "Fenghua",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "page-about": {
    "alt": "Man with camera photographing event decorations",
    "width": 2200,
    "height": 1467,
    "source": "https://unsplash.com/photos/man-with-camera-photographing-event-decorations-kx1EYgVxYf0",
    "author": "Adhitya Sibikumar",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "page-contact": {
    "alt": "people gathering in room",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/people-gathering-in-room-5H0p6JPUHbI",
    "author": "Product School",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "page-privacy": {
    "alt": "a table with a brochure, magazine, and pen on it",
    "width": 1800,
    "height": 1013,
    "source": "https://unsplash.com/photos/a-table-with-a-brochure-magazine-and-pen-on-it-zWaOE6M2hfc",
    "author": "Walls.io",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-corporate-event-photography": {
    "alt": "Audience gathered beneath patterned lighting at a corporate event",
    "width": 2736,
    "height": 1824,
    "source": "https://unsplash.com/photos/crowd-of-people-sitting-on-chairs-inside-room-F2KRf_QfCqw",
    "author": "Headway",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-conference-photography": {
    "alt": "Speaker addressing a full conference auditorium",
    "width": 3936,
    "height": 2624,
    "source": "https://unsplash.com/photos/speaker-on-stage-addressing-large-audience-6vAjp0pscX0",
    "author": "Alexandre Pellaes",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-convention-photography": {
    "alt": "Delegates seated for a convention session in a bright hall",
    "width": 3976,
    "height": 2652,
    "source": "https://unsplash.com/photos/men-and-women-sitting-on-chairs-inside-room-_wDZkpybAfY",
    "author": "Claudio Schwarz",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-trade-show-photography": {
    "alt": "Visitors exploring illuminated exhibition booths on a trade show floor",
    "width": 2423,
    "height": 1616,
    "source": "https://unsplash.com/photos/an-indoor-exhibition-hall-is-full-of-vendors-dy65r8fjeyI",
    "author": "Jin-Woo Lee",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-gala-photography": {
    "alt": "Candlelit banquet table set for an evening gala",
    "width": 2487,
    "height": 1658,
    "source": "https://unsplash.com/photos/long-dining-table-with-festive-flowers-fb0_wj2MZk4",
    "author": "M F",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-award-ceremony-photography": {
    "alt": "Award recipient holding a trophy in front of a branded ceremony backdrop",
    "width": 3000,
    "height": 1688,
    "source": "https://unsplash.com/photos/man-holding-award-on-stage-with-top-of-mind-sign-m_wiSoDX2KI",
    "author": "alexsandra frizzera",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-festival-photography": {
    "alt": "Large outdoor festival crowd beneath colourful stage installations",
    "width": 3500,
    "height": 2161,
    "source": "https://unsplash.com/photos/people-gathering-on-green-grass-field-during-daytime-FUmDe-Bx1LA",
    "author": "Tony Pham",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-brand-activation-photography": {
    "alt": "Guest interacting with a colourful branded event installation",
    "width": 2336,
    "height": 3504,
    "source": "https://unsplash.com/photos/a-smiling-woman-takes-a-coca-cola-from-a-red-cooler-2-sr4FL9i5c",
    "author": "Bemnet Mesfin",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-networking-event-photography": {
    "alt": "Professionals talking during a networking reception",
    "width": 3840,
    "height": 2560,
    "source": "https://unsplash.com/photos/a-group-of-people-standing-in-a-room-yTsy3PYFPtc",
    "author": "M ACCELERATOR",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-grand-opening-photography": {
    "alt": "Guests celebrating a ribbon cutting on an outdoor terrace",
    "width": 3664,
    "height": 2473,
    "source": "https://unsplash.com/photos/people-are-cutting-a-ribbon-on-a-rooftop-OuQlPItp5ZA",
    "author": "Deliberate Directions",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-product-launch-photography": {
    "alt": "Guests watching a presentation at a product event",
    "width": 3819,
    "height": 2547,
    "source": "https://unsplash.com/photos/people-gathering-inside-the-building-BdV23FLkmxQ",
    "author": "Evangeline Shaw",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-fundraiser-photography": {
    "alt": "Participants taking part in an outdoor ice bucket fundraising event",
    "width": 2592,
    "height": 1728,
    "source": "https://unsplash.com/photos/woman-in-white-floral-dress-holding-blue-bucket-SmQ_ajPVUm8",
    "author": "Major Tom Agency",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-nonprofit-event-photography": {
    "alt": "Volunteer team gathered at a community running event",
    "width": 2710,
    "height": 1663,
    "source": "https://unsplash.com/photos/men-and-women-in-a-fun-run-activity-5wJ2GiYSifA",
    "author": "Roman Synkevych",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-university-event-photography": {
    "alt": "University graduates throwing caps outside a campus building",
    "width": 2808,
    "height": 1872,
    "source": "https://unsplash.com/photos/graduates-throwing-caps-in-celebration-hpRGrfOIybc",
    "author": "RUT MIIT",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-government-event-photography": {
    "alt": "Officials and delegates seated at a formal public-sector gathering",
    "width": 2892,
    "height": 1954,
    "source": "https://unsplash.com/photos/people-in-conference-sTou35WzMso",
    "author": "History in HD",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-private-event-photography": {
    "alt": "Friends sharing conversation around a dinner table",
    "width": 2178,
    "height": 1634,
    "source": "https://unsplash.com/photos/a-group-of-people-sitting-around-a-table-with-food-and-drinks-jlXtAvGx_hg",
    "author": "OurWhisky Foundation",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-party-photography": {
    "alt": "Guests celebrating together in a warmly lit party venue",
    "width": 1748,
    "height": 2352,
    "source": "https://unsplash.com/photos/a-group-of-people-celebrating-with-confetti-and-balloons-4SKNDU85KOw",
    "author": "OurWhisky Foundation",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-headshot-photography": {
    "alt": "Professional headshot of a woman against a neutral background",
    "width": 2880,
    "height": 1920,
    "source": "https://unsplash.com/photos/a-woman-with-long-blonde-hair-wearing-a-black-shirt-VzusBjHlKM8",
    "author": "Giorgio Trovato",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-on-site-headshots": {
    "alt": "Photographer working with a portrait subject in a lit studio setup",
    "width": 3270,
    "height": 2180,
    "source": "https://unsplash.com/photos/man-in-black-t-shirt-and-blue-denim-jeans-playing-guitar-1_GpBh396Zk",
    "author": "Marissa Lewis",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-red-carpet-photography": {
    "alt": "Guest posing on a red carpet outside an event entrance",
    "width": 2994,
    "height": 4336,
    "source": "https://unsplash.com/photos/a-woman-in-black-poses-on-a-red-carpet-0OkFE3i2-Ng",
    "author": "nicola dowie",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-step-and-repeat-photography": {
    "alt": "Guest posing before a repeating branded event backdrop",
    "width": 2012,
    "height": 3024,
    "source": "https://unsplash.com/photos/woman-in-black-suit-red-top-red-carpet-event-BvAhCSyys5I",
    "author": "ola szkolda",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-event-photo-booth": {
    "alt": "Wooden photo booth camera and kiosk ready for guests",
    "width": 3000,
    "height": 2004,
    "source": "https://unsplash.com/photos/camera-on-tripod-beside-bicycle-If--8LCaLPs",
    "author": "Thibault Copleux",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-event-videography": {
    "alt": "Video camera recording a speaker at an indoor event",
    "width": 2736,
    "height": 1824,
    "source": "https://unsplash.com/photos/video-camera-recording-musical-performance-0O0gux4OZX4",
    "author": "Jesus Loves Austin",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-same-day-event-photo-editing": {
    "alt": "Portrait open in photo editing software on a desktop monitor",
    "width": 4000,
    "height": 2250,
    "source": "https://unsplash.com/photos/black-lenovo-laptop-computer-turned-on-displaying-man-in-red-shirt-wi3xBnWZlvQ",
    "author": "Onur Binay",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-social-media-event-photography": {
    "alt": "Audience member capturing a concert with a smartphone",
    "width": 2572,
    "height": 1715,
    "source": "https://unsplash.com/photos/person-holding-smartphone-taking-video-of-a-concert-near-stage-with-lights-during-nighttime-JNuKyKXLh8U",
    "author": "Noiseporn",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-executive-portrait-photography": {
    "alt": "Professional portrait of a smiling woman in a blue dress",
    "width": 1920,
    "height": 2880,
    "source": "https://unsplash.com/photos/smiling-woman-sitting-on-black-chair-kXmKqYOGA4Y",
    "author": "Christina @ wocintechchat.com M",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-team-group-photography": {
    "alt": "Business team posing together in a bright office",
    "width": 3800,
    "height": 2138,
    "source": "https://unsplash.com/photos/four-professionals-in-business-attire-stand-together-gItonyvrdUA",
    "author": "Vitaly Gariev",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-speaker-portrait-photography": {
    "alt": "Portrait of a smiling woman wearing a red top",
    "width": 1872,
    "height": 2808,
    "source": "https://unsplash.com/photos/closeup-photography-of-woman-smiling-mEZ3PoFGs_k",
    "author": "Michael Dam",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-sponsor-photography": {
    "alt": "Exhibitors speaking with visitors at a branded trade show booth",
    "width": 4000,
    "height": 2666,
    "source": "https://unsplash.com/photos/people-at-a-business-exhibition-interacting-with-a-booth-BKpOVik79lA",
    "author": "Trans Russia",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-venue-decor-photography": {
    "alt": "Floral centrepieces and dramatic lighting in a decorated event space",
    "width": 3000,
    "height": 2000,
    "source": "https://unsplash.com/photos/a-table-set-up-for-a-party-with-candles-and-flowers--3pvRUfQc-c",
    "author": "HamZa NOUASRIA",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-event-recap-photography": {
    "alt": "Audience gathered for an intimate live event",
    "width": 3008,
    "height": 2008,
    "source": "https://unsplash.com/photos/laughing-people-in-party-fIHozNWfcvs",
    "author": "Samantha Gades",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-press-conference-photography": {
    "alt": "Spokesperson addressing microphones at a press conference",
    "width": 2592,
    "height": 1728,
    "source": "https://unsplash.com/photos/man-speaking-at-podium-surrounded-by-colleagues-and-microphones-XdrgxT9i2Q0",
    "author": "Kau\u00ea Martins Bergamasco",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-investor-day-photography": {
    "alt": "Presenter speaking to seated business guests in a meeting space",
    "width": 4767,
    "height": 2681,
    "source": "https://unsplash.com/photos/man-standing-in-front-of-group-of-men-rxpThOwuVgE",
    "author": "Austin Distel",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-company-town-hall-photography": {
    "alt": "Audience members listening during a company gathering",
    "width": 5184,
    "height": 2684,
    "source": "https://unsplash.com/photos/diverse-group-at-professional-seminar-zt6OxRORM2g",
    "author": "wes lewis",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-panel-discussion-photography": {
    "alt": "Moderator and panelists seated onstage before an audience",
    "width": 4240,
    "height": 2120,
    "source": "https://unsplash.com/photos/a-group-of-people-sitting-on-a-stage-in-front-of-a-crowd-Gi-HOiLMx7o",
    "author": "Zac Bowling",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-roaming-event-photographer": {
    "alt": "Photographer photographing guests during a reception",
    "width": 2448,
    "height": 1632,
    "source": "https://unsplash.com/photos/wedding-couple-inside-room-ok0AGh755Po",
    "author": "Quilia",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-behind-the-scenes-event-photography": {
    "alt": "Production equipment and stage infrastructure behind an event",
    "width": 3000,
    "height": 2000,
    "source": "https://unsplash.com/photos/a-stage-set-up-for-a-concert-with-purple-lighting-Y1GkRjPajAg",
    "author": "November Wong",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-golf-tournament-photography": {
    "alt": "Golfers greeting one another beside golf carts on a course",
    "width": 3735,
    "height": 2490,
    "source": "https://unsplash.com/photos/golfers-toasting-on-sunny-course-mqQ0BuJ5dsA",
    "author": "Sugar Golf",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "service-holiday-party-photography": {
    "alt": "Colleagues and friends gathered beside a Christmas tree for a holiday celebration",
    "width": 2330,
    "height": 1748,
    "source": "https://unsplash.com/photos/a-group-of-people-sitting-around-a-christmas-tree-uiBzmQWrYhw",
    "author": "OurWhisky Foundation",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-ajax": {
    "alt": "table settings in room",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/table-settings-in-room-OAVqa8hQvWI",
    "author": "Thomas William",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-barrie": {
    "alt": "person discussing while standing in front of a large screen in front of people inside dim-lighted room",
    "width": 1800,
    "height": 1286,
    "source": "https://unsplash.com/photos/person-discussing-while-standing-in-front-of-a-large-screen-in-front-of-people-inside-dim-lighted-room-bzdhc5b3Bxs",
    "author": "Teemu Paananen",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-brampton": {
    "alt": "A large conference room with round tables, white chairs, and three projection screens",
    "width": 1800,
    "height": 1202,
    "source": "https://unsplash.com/photos/conference-room-with-round-tables-Q_KdjKxntH8",
    "author": "CHUTTERSNAP",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-burlington": {
    "alt": "people raising hands with bokeh lights",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/people-raising-hands-with-bokeh-lights-0RDBOAdnbWM",
    "author": "Jaime Lopes",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-burnaby": {
    "alt": "A woman speaking at a podium before an audience in a brick-walled room",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/woman-speaking-at-brick-walled-conference-wn7dOzUh3Rs",
    "author": "charlesdeluvio",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-calgary": {
    "alt": "group of people gathering",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/group-of-people-gathering-MAnhvw0nDDY",
    "author": "HIVAN ARVIZU @soyhivan",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-cambridge": {
    "alt": "A person speaks at a presentation with a large screen",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/a-person-speaks-at-a-presentation-with-a-large-screen-ha1sl7bfcVI",
    "author": "rawkkim",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-charlottetown": {
    "alt": "A group of people standing around each other",
    "width": 1800,
    "height": 1013,
    "source": "https://unsplash.com/photos/a-group-of-people-standing-around-each-other-Tc1mBpMS-zs",
    "author": "jimylloyd laumain",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-edmonton": {
    "alt": "people walking in hallway",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/people-walking-in-hallway-hSAlu33padA",
    "author": "britt gaiser",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-fredericton": {
    "alt": "man sitting on stage",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/man-sitting-on-stage-E0bIdzi8zoQ",
    "author": "Miguel Henriques",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-gatineau": {
    "alt": "grayscale photo of people sitting on chair",
    "width": 1800,
    "height": 1195,
    "source": "https://unsplash.com/photos/grayscale-photo-of-people-sitting-on-chair-gcDwzUGuUoI",
    "author": "davide ragusa",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-guelph": {
    "alt": "people sitting on chairs inside stadium",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/people-sitting-on-chairs-inside-stadium-phlc0v-lcvw",
    "author": "Product School",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-halifax": {
    "alt": "people watching at a room",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/people-watching-at-a-room-FDV1BaKNKEo",
    "author": "Antenna",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-hamilton": {
    "alt": "man in blue and white plaid button up shirt sitting on black chair",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/man-in-blue-and-white-plaid-button-up-shirt-sitting-on-black-chair-zJYMJIrQYTE",
    "author": "M ACCELERATOR",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-kamloops": {
    "alt": "People in an audience raising their hands to ask questions at a conference",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/audience-raising-hands-at-conference-ckVjMurwKIs",
    "author": "Elissa Garcia",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-kelowna": {
    "alt": "Three people at a formal dinner event",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/three-people-at-a-formal-dinner-event-UCHR7VqS8lk",
    "author": "Filip Rankovic Grobgaard",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-kingston": {
    "alt": "A woman smiles at a formal gathering with many people",
    "width": 1800,
    "height": 1102,
    "source": "https://unsplash.com/photos/a-woman-smiles-at-a-formal-gathering-with-many-people-TfljWjE3iLo",
    "author": "Filip Rankovic Grobgaard",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-kitchener-waterloo": {
    "alt": "People gathered at a formal dinner event",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/people-gathered-at-a-formal-dinner-event-FBYrzkDelOw",
    "author": "Filip Rankovic Grobgaard",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-laval": {
    "alt": "Elegant table setting with candles and teacups",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/elegant-table-setting-with-candles-and-teacups-o9qZRZbdHow",
    "author": "Jose Marroquin",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-lethbridge": {
    "alt": "A formal dinner table setting with black tablecloth",
    "width": 1800,
    "height": 1374,
    "source": "https://unsplash.com/photos/a-formal-dinner-table-setting-with-black-tablecloth-vi6u8RcMSUU",
    "author": "Filip Rankovic Grobgaard",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-london": {
    "alt": "Three people seated at a formal dinner table",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/three-people-seated-at-a-formal-dinner-table-VqHrACdXu80",
    "author": "Filip Rankovic Grobgaard",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-markham": {
    "alt": "Couple raising wine glasses at a formal dinner",
    "width": 1800,
    "height": 1366,
    "source": "https://unsplash.com/photos/couple-raising-wine-glasses-at-a-formal-dinner-Jq5YZ5-A17Q",
    "author": "Filip Rankovic Grobgaard",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-milton": {
    "alt": "people standing in front of blue and white building",
    "width": 1800,
    "height": 1225,
    "source": "https://unsplash.com/photos/people-standing-in-front-of-blue-and-white-building-irBDwv8f93Q",
    "author": "wu yi",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-mississauga": {
    "alt": "A crowd of people standing around a car show",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/a-crowd-of-people-standing-around-a-car-show-cxb2r-WyUXc",
    "author": "Piotr AMS",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-moncton": {
    "alt": "Crowd gathered inside a large tent with decorated stalls",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/crowd-gathered-inside-a-large-tent-with-decorated-stalls-pllryrlWiSM",
    "author": "Margo Evardson",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-montreal": {
    "alt": "A group of people walking around a store",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/a-group-of-people-walking-around-a-store-IwbWq7wEMYU",
    "author": "syahmi syahir",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-nanaimo": {
    "alt": "Several clear statuettes stand in a row",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/several-clear-statuettes-stand-in-a-row-shsJnMCkvhY",
    "author": "Wesley Tingey",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-niagara-falls": {
    "alt": "Group poses with award at real excellence awards 2025",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/group-poses-with-award-at-real-excellence-awards-2025-HmfIhbAKHvg",
    "author": "Skytech Aviation",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-oakville": {
    "alt": "man wearing gray dress shirt",
    "width": 1800,
    "height": 1202,
    "source": "https://unsplash.com/photos/man-wearing-gray-dress-shirt-4jtHJX4SNk8",
    "author": "Product School",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-oshawa": {
    "alt": "people sitting on stage",
    "width": 1800,
    "height": 1197,
    "source": "https://unsplash.com/photos/people-sitting-on-stage-ZG1WIcFHAkQ",
    "author": "Evangeline Shaw",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-ottawa": {
    "alt": "a group of people sitting in front of a projection screen",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/a-group-of-people-sitting-in-front-of-a-projection-screen-ZXx-aoBPYuM",
    "author": "Thomas Delacr\u00e9taz",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-quebec-city": {
    "alt": "Three people on stage at a summit",
    "width": 1800,
    "height": 1195,
    "source": "https://unsplash.com/photos/three-people-on-stage-at-a-summit-UyYimlPza1o",
    "author": "Carlos Gil",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-red-deer": {
    "alt": "Four people sit on a stage at a panel discussion",
    "width": 1800,
    "height": 1013,
    "source": "https://unsplash.com/photos/four-people-sit-on-a-stage-at-a-panel-discussion-lhZIyJ-uhGE",
    "author": "Marwen Larafa",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-regina": {
    "alt": "person holding yellow sticky notes",
    "width": 1800,
    "height": 1202,
    "source": "https://unsplash.com/photos/person-holding-yellow-sticky-notes-MDu-53qRVr4",
    "author": "FORTYTWO",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-richmond": {
    "alt": "A group of adults attending a workshop in a bright sunlit room",
    "width": 1800,
    "height": 1202,
    "source": "https://unsplash.com/photos/adults-attending-workshop-in-sunlit-room-yCs7YTwEw2w",
    "author": "Timur Shakerzianov",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-richmond-hill": {
    "alt": "people on conference table looking at talking woman",
    "width": 1800,
    "height": 1202,
    "source": "https://unsplash.com/photos/people-on-conference-table-looking-at-talking-woman-Q80LYxv_Tbs",
    "author": "Christina @ wocintechchat.com M",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-saint-john": {
    "alt": "people standiunmg",
    "width": 1800,
    "height": 1350,
    "source": "https://unsplash.com/photos/people-standiunmg-Cv7Y0v51zEo",
    "author": "Fred Kloet",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-saskatoon": {
    "alt": "people sitting at the table looking to another person standing in front of them",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/people-sitting-at-the-table-looking-to-another-person-standing-in-front-of-them-Uz8THWPXwhI",
    "author": "Smartworks Coworking",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-sherbrooke": {
    "alt": "people raising wine glass in selective focus photography",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/people-raising-wine-glass-in-selective-focus-photography-ULHxWq8reao",
    "author": "Al Elmes",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-st-johns": {
    "alt": "Catering spread with pear bruschetta, pastries, and small jars of dip on a table",
    "width": 1800,
    "height": 1350,
    "source": "https://unsplash.com/photos/catering-spread-with-bruschetta-and-pastries-m4Yd_53jlUE",
    "author": "Culinarissimo",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-sudbury": {
    "alt": "a group of people sitting at tables",
    "width": 1800,
    "height": 1350,
    "source": "https://unsplash.com/photos/a-group-of-people-sitting-at-tables-2_H1OekuzpY",
    "author": "Andy Wang",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-surrey": {
    "alt": "a table with a vase of flowers and candles on it",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/a-table-with-a-vase-of-flowers-and-candles-on-it-OWEPHt9a-90",
    "author": "HamZa NOUASRIA",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-thunder-bay": {
    "alt": "table arrangement in a room",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/table-arrangement-in-a-room-34Xicn82lY4",
    "author": "Luigi Pozzoli",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-toronto": {
    "alt": "people in conference",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/people-in-conference-nwLTVwb7DbU",
    "author": "Evangeline Shaw",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-trois-rivieres": {
    "alt": "people inside bar",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/people-inside-bar-8vheRi6dbaw",
    "author": "Axville",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-vancouver": {
    "alt": "a table is set for a formal dinner",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/a-table-is-set-for-a-formal-dinner-jPPmXm8iapY",
    "author": "HamZa NOUASRIA",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-vaughan": {
    "alt": "party dish arrangement",
    "width": 1800,
    "height": 1202,
    "source": "https://unsplash.com/photos/party-dish-arrangement-tbaoryUol_E",
    "author": "Mitchell Lawler",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-victoria": {
    "alt": "A formal dining table set for a banquet",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/a-formal-dining-table-set-for-a-banquet-7b2vwH2osnA",
    "author": "Vlad Deep",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-whistler": {
    "alt": "a group of women in pink shirts and hats",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/a-group-of-women-in-pink-shirts-and-hats-CFkrwz1M_0s",
    "author": "Susan G. Komen 3-Day",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-whitby": {
    "alt": "A large group of people gathered indoors at an event",
    "width": 1800,
    "height": 1014,
    "source": "https://unsplash.com/photos/a-large-group-of-people-gathered-indoors-at-an-event-nhxN9_O7xZY",
    "author": "Avesta",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-windsor": {
    "alt": "man speaking on stage",
    "width": 1800,
    "height": 1250,
    "source": "https://unsplash.com/photos/man-speaking-on-stage-cd7i9vYIyeY",
    "author": "Product School",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "city-winnipeg": {
    "alt": "A panel discussion is taking place in front of an audience",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/a-panel-discussion-is-taking-place-in-front-of-an-audience-_AN5hrsJbgE",
    "author": "The Executive Group",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "showcase-home-stage": {
    "alt": "Speaker presenting on stage to an audience",
    "width": 1800,
    "height": 1174,
    "source": "https://unsplash.com/photos/speaker-presenting-on-stage-to-an-audience-AsxOJcsaR4g",
    "author": "Carlos Gil",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "showcase-home-networking": {
    "alt": "People mingling at a formal event with drinks",
    "width": 1800,
    "height": 1220,
    "source": "https://unsplash.com/photos/people-mingling-at-a-formal-event-with-drinks-fKzdMDr6wEo",
    "author": "Filip Rankovic Grobgaard",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "showcase-home-audience": {
    "alt": "man standing beside projecting wall in front of people",
    "width": 1800,
    "height": 1201,
    "source": "https://unsplash.com/photos/man-standing-beside-projecting-wall-in-front-of-people-F3RCdDZqAZU",
    "author": "Evangeline Shaw",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "showcase-services-reception": {
    "alt": "People mingling around a buffet table at an event",
    "width": 1800,
    "height": 1012,
    "source": "https://unsplash.com/photos/people-mingling-around-a-buffet-table-at-an-event-OOlgnLwkfZ8",
    "author": "Filip Rankovic Grobgaard",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "showcase-services-panel": {
    "alt": "Two speakers on stage at london tech week event",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/two-speakers-on-stage-at-london-tech-week-event-MPvISesyh_g",
    "author": "Euronewsweek Media",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "showcase-services-speaker": {
    "alt": "Speaker presents at quantum dots event on stage",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/speaker-presents-at-quantum-dots-event-on-stage-beceNmmrBss",
    "author": "Marwen Larafa",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "showcase-industries-connections": {
    "alt": "a man and a woman standing in front of a projector screen",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/a-man-and-a-woman-standing-in-front-of-a-projector-screen-iOssmTAy9Ps",
    "author": "gokhan polat",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  },
  "showcase-industries-conference": {
    "alt": "A speaker addresses an audience at an indoor conference event",
    "width": 1800,
    "height": 1200,
    "source": "https://unsplash.com/photos/a-speaker-addresses-an-audience-at-an-indoor-conference-event-5ksZa5-2kvU",
    "author": "Euronewsweek Media",
    "license": "Unsplash License",
    "licenseUrl": "https://unsplash.com/license"
  }
};

Object.assign(pageImages,originalImagery);
pageImages["home-hero"]=originalImagery["original-keynote"];
pageImages["home-corporate"]=originalImagery["original-networking"];
pageImages["home-conference"]=originalImagery["original-panel"];
pageImages["home-gala"]=originalImagery["original-gala"];
pageImages["service-corporate-event-photography"]=originalImagery["original-keynote"];
pageImages["service-networking-event-photography"]=originalImagery["original-networking"];
pageImages["service-gala-photography"]=originalImagery["original-gala"];
pageImages["service-trade-show-photography"]=originalImagery["original-exhibition"];
pageImages["service-on-site-headshots"]=originalImagery["original-portraits"];
pageImages["service-panel-discussion-photography"]=originalImagery["original-panel"];

pageImages["page-services"]={"alt": "Event photographer capturing business delegates during a corporate networking reception", "altFr": "Photographe captant les échanges entre participants lors d’une réception d’entreprise", "width": 1600, "height": 1067, "source": "", "author": "EventPhoto.ca", "license": "Original illustrative marketing image", "licenseUrl": "", "requiresCredit": false, "fileKey": "services-header-v2", "objectPosition": "50% 42%"};
