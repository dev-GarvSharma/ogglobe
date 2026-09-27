# OG Globe React site status

## Built

- Separate Vite + React + TypeScript frontend in `new-site/`; legacy site files at the workspace root remain untouched.
- Premium industrial visual system with responsive layouts, focus styles, semantic landmarks, reduced-motion handling, and sticky desktop/mobile navigation.
- Home, About, Contact, Industries, Services, product directory and reusable product detail routes.
- Data-driven product areas and industry list based on the existing OG Globe site.
- Full catalogue generated from 42 original product/category pages, with 296 associated source image references and the product text blocks extracted from those pages. Each catalogue entry has its own detail route and image gallery; repeated legacy variants contribute additional images to their matching entry.
- Founder profiles and company/service/contact information carried over from the source About and Contact pages.
- SEO title, description and canonical metadata are updated per route; static Open Graph defaults are in `index.html`.
- Legacy `.html` page redirects are defined in `src/data.ts` and handled by the React router.
- Existing logo, founder and product imagery is copied under `public/images/`.

## Routes

`/`, `/about`, `/contact`, `/industries`, `/services`, `/products`, and `/products/:slug`. The full local catalogue is stored in `src/legacyCatalog.json` and includes original product descriptions/text and image galleries.

Legacy aliases include `/about.html`, `/contacts.html`, `/clients.html`, and the catalogue pages listed in `PROJECT_ANALYSIS.md`. Detail paths for all discovered local product HTML files resolve using `/products/<slug>`.

## Form / backend

The contact form checks required fields and email syntax in the browser. It does not submit or store enquiries. Connect the form submit handler in `src/site.tsx` to an approved backend/API before using it to collect enquiries. The success state clearly tells visitors to email sales@ogglobe.com meanwhile.

## Remaining TODOs

- Review the visual crop/appropriateness of legacy photography and founder portraits with OG Globe.
- Review the extracted catalogue text and associated image selections against OG Globe’s current approved product information.
- Decide if all older or duplicate pages, such as antimicrobial content and legacy individual pump variants, should remain in the final public route map.
- Configure host-level SPA fallback (rewrite unknown app paths to `index.html`) when deploying this subproject.
- Connect enquiry form to backend and define privacy/retention behavior.
- Google Fonts are loaded remotely; bundle approved fonts locally if offline loading or strict CSP is required.

## Run and deploy

From `new-site/`, run `npm install`, then `npm run dev` for local development and `npm run build` for the production bundle in `dist/`. Deploy the contents of `dist/` with SPA route fallback enabled. Keep the existing PHP/HTML site in place until the React app is ready to replace it.
