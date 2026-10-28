# EventPhoto.ca

Canadian event photography website built with React, Vinext and Cloudflare Workers through Sites.

## Content

127 English routes and 127 French counterparts: 39 services, 52 cities, 10 province directories, 12 industries and three Toronto service/location pages, plus the homepage, gallery, company pages and forms. Canadian French copy lives in `lib/french-content.ts`, `lib/french-service.ts`, and the bilingual content records. `lib/pages.ts` owns the route allowlist. Unknown paths return 404.

## Development and verification

Install with the Sites dependency helper. Run `npm run dev` for development. Use the Sites build helper for deployment output. The application preserves the existing Sites Worker and storage bindings.

- `npx tsc --noEmit`
- `node --experimental-strip-types --test tests/formspree.test.mjs`
- `node tests/site-audit.mjs`

The site audit renders all routes and checks internal links, language routing, image files, headings, JSON-LD, canonical/hreflang metadata and sitemap coverage. It stubs navigation for server rendering; it does not replace browser interaction checks.

## Inquiries

New browser submissions use Formspree form `mbglqynj`, including contact details, attachments, language and campaign attribution. The legacy D1/R2 API remains for compatibility and historical records. An accepted submission does not prove notification delivery; verify the configured recipient and attachment support in Formspree. Public contact: hire@eventphoto.ca / (833) 696-9996.

See `docs/OPERATIONS.md` for operational details and `docs/REVIEW-2026-10-27.md` for this review’s checks and limits. Never commit credentials, visitor submissions or private attachments.
