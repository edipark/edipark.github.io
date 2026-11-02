# edipark.github.io

Sunghyun Park's personal portfolio, built with Next.js and exported to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Requires Node.js 22.13 or later. Use `npm ci` for a clean install.

- `app/page.tsx`: page structure, biography, publications, and research experience.
- `app/portfolio-data.ts`: project content and research interests.
- `app/globals.css`: layout, responsive styles, and light/dark palettes.
- `app/publication-image.tsx`: image dialog and scroll restoration.
- `app/theme-toggle.tsx`: persisted theme selection.
- `public/`: images, demonstration videos, and CV.

## Checks and static preview

```bash
npm run lint
npm run typecheck
npm test
npm start
```

`npm test` builds the production export in `out/`, checks the content, and compares
the rendered markup, applied stylesheet, interaction sources, and referenced assets
against the pre-refactor baseline. The authorized SNU logo centering is the only
asset exception. Unused generated Tailwind utilities are excluded from the CSS
comparison only after checking that the page does not use their classes.

`npm start` serves `out/` at http://127.0.0.1:3000 using Python 3's static HTTP
server. Build first with `npm run build` or `npm test`. This is a local preview;
production hosting is provided by GitHub Pages.

The cleanup findings and render-preservation checks are documented in
[the refactor audit](docs/refactor-audit.md).

## Deployment

Pushes to `main` are exported as a static site and deployed automatically to
[edipark.github.io](https://edipark.github.io/) with GitHub Pages.
