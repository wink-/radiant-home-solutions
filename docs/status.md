---
type: Status
title: Status
description: Current state and next tasks for Radiant Home Solutions.
tags: [status, roadmap]
generated:
  by: "Design mockup agent (OpenCode)"
  at: "2026-10-23T20:22:19Z"
status: rebuilding
---

# Status: Astro Rebuild (feature branch)

## Current Phase

Rebuilding the Hugo/Ananke site as a modern Astro 7 site, additive on branch `feature/astro-rebuild`. Hugo files remain untouched.

## Completed

- Astro 7 scaffold: `package.json`, `astro.config.mjs`, content layer config (`src/content.config.ts`), site facts in `src/site.config.ts`.
- Content migrated from Hugo (TOML → YAML, `weight` → `order`, `date` → `pubDate`): about, small jobs, service areas, and 8 service pages derived from the Hugo services index.
- Conversion-focused pages built: `/` (hero, services grid, service-area strip, why-us, CTA), `/services/`, `/services/[slug]/` (8 pages), `/small-jobs/`, `/service-areas/`, `/about/`, `/contact/` (phone-first, no fake form), and a 404.
- Design system in plain CSS: navy/steel base, safety-orange accent, sticky header with call button, sticky mobile call bar.
- Truthful LocalBusiness JSON-LD on the homepage (name, url, description, telephone, email, areaServed only).
- Legacy `/areas-served/` URL redirects to `/service-areas/`; `robots.txt` and Sveltia `admin/` carried over via `publicDir: './static'`.
- SEO basics: `@astrojs/sitemap` integration emits `sitemap-index.xml` (14 URLs); every page gets a canonical `<link>` and a `<link rel="sitemap">` in the head via `BaseLayout.astro`; `static/robots.txt` now points at `/sitemap-index.xml`.
- `npm run build` passes cleanly: 15 pages, zero warnings.

## Next Tasks

- Human review of the Astro site (copy, phone/email confirmation, design).
- Merge `feature/astro-rebuild` into `master`.
- Repoint Netlify: build command `npm run build`, publish directory `dist/` (replacing the Hugo build in `netlify.toml`).
- After a clean Netlify deploy: remove Hugo directories (`content/`, `layouts/`, `themes/`, `archetypes/`, `hugo.toml`, `public/`, `resources/`) and the Ananke submodule.
- Optional follow-ups: update the Sveltia CMS config to point at the new content locations.

## Blockers/Risks

- Phone number `(555) 123-4567` and `info@radianthomesolutions.com` look like placeholders (see `docs/notes.md`) — confirm before production.
- Until Netlify is repointed, merges to `master` still deploy the Hugo site from `public/`, not the Astro build.

## Last Worked On

2026-10-24 - Added static design-mockup workflow under `mockups/` (gallery, homepage baseline, estimate-first CSS-only variant) — mockups + docs only, no production files.
2026-10-23 - Added sitemap (`@astrojs/sitemap`) and canonical URLs; updated `robots.txt` sitemap reference.

## Suggested First Command

```bash
npm install && npm run dev
```


## Platform relationship (2026-10-23)

Intentionally standalone: this is a local-service marketing site, not a Streetcats
publication destination. It is not registered as a content-platform theme.
