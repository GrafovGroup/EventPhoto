# EventPhoto.ca operations

Historical inquiries submitted before the Formspree integration are stored in the Sites D1 `inquiries` table; attachments are private R2 objects referenced in `attachments_json`. There is deliberately no public read endpoint. Use the owner's Sites database tools to inspect inquiries. `kind` separates quote requests from partner applications; `status` and `assigned_vendor` support future assignment. The JSON details preserve the brief and contact consent; attribution records campaign parameters and original landing page.

New quote requests and photographer applications use @formspree/react and form mbglqynj (https://formspree.io/f/mbglqynj). Formspree is the current submission store and notification service; new browser submissions do not call the legacy /api/inquiries D1/R2 endpoint. All step values, reference, consent, language, attribution and attachments are sent together. Success is shown only after Formspree accepts a submission. The public contact email is hire@eventphoto.ca; verify that this is the confirmed notification recipient in the Formspree dashboard. An accepted API response does not verify inbox delivery. File upload support requires a Formspree plan that includes uploads. Keep legacy records and private attachments intact.

The default phone number is (833) 696-9996 as directed. Verify the business phone destination before broad public promotion.

The site is public on OpenAI Sites. EventPhoto.ca DNS and SSL are active. Canonicals, structured data and sitemaps use https://eventphoto.ca. WHC manages DNS and the domain; OpenAI Sites hosts the website.

Images are licensed Unsplash and Wikimedia assets, not represented as completed EventPhoto projects. Source and reuse details are in image-sources.json and page-image-sources.json; Wikimedia credits appear on the corresponding pages. Add authorized real projects as portfolio case studies when available; no fictional case studies, client logos, offices or testimonials were created.

English service pages cover 39 services, with 52 cities. All 127 English routes now have French counterparts, including every city, province, industry and Toronto service/location page. French directories retain the visitor’s language. Only published route records are recognized; unknown routes return 404. Service/city combinations initially include three differentiated Toronto pages.

Uploads accept PDF, JPG, PNG, WebP and text files: up to three files of 5 MB each. The legacy API checks raster/PDF signatures; current Formspree browser submissions validate file extension, count and size locally, with provider-side handling. There is no antivirus scanning; treat uploaded documents as untrusted. No attachments are served publicly.

Production schema changes must be append-only Drizzle migrations. Local QA data is not deployed. Lead retention and removal can be handled through owner tools; delete associated R2 objects as well when processing a removal request.

The recovered master prompt is limited to the first 20,000 characters returned by the task reader. Scope was implemented from that excerpt; any instructions beyond section 20 remain unverified.

Photography direction: event coverage first, primarily B2B conferences, networking, workshops, exhibitions, galas and awards, with private celebrations and community fundraisers represented. City and province pages use distinct event photographs rather than tourism landscapes. Location page photography does not establish the pictured event’s location or claim an EventPhoto client engagement. Keep source metadata accurate and use neutral scene descriptions.
