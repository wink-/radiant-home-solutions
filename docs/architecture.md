---
type: Architecture
title: Architecture
description: Runtime shape and key files for Radiant Home Solutions.
tags: [architecture, astro, hugo, static-site]
generated:
  by: "Astro rebuild agent (OpenCode)"
  at: "2026-10-23T16:23:28Z"
status: rebuilding
---

# Architecture

## Runtime Shape

The repo is mid-migration from Hugo to Astro on the `feature/astro-rebuild` branch. Both stacks are present; the Hugo files are frozen and untouched.

- **Astro 7 (new, active on the branch):** static site built with `npm run build`, output in `dist/`.
- **Hugo (legacy, untouched):** Ananke theme, built with `hugo --gc --minify`, output in `public/`.

Netlify still publishes `public/` per `netlify.toml`; repointing it to `npm run build` + `dist/` is a post-merge task.

## Astro Key Files

| Path | Role |
| --- | --- |
| `package.json` | Astro 7 dependency and `dev`/`build`/`preview` scripts. |
| `astro.config.mjs` | `site`, `publicDir: './static'`, and the legacy `/areas-served/` → `/service-areas/` redirect. |
| `src/site.config.ts` | Single source of truth for business facts: contact info, nav (mirrors `hugo.toml` menus), service areas, hours. |
| `src/content.config.ts` | Content layer config: `services` and `pages` collections via `glob` loaders. |
| `src/content/services/*.md` | 8 service pages derived from the Hugo `content/services/_index.md` categories. |
| `src/content/pages/*.md` | Long-form pages migrated from Hugo (about, small-jobs, areas-served) with YAML frontmatter. |
| `src/layouts/BaseLayout.astro` | HTML shell, header/footer/call-bar slots, optional LocalBusiness JSON-LD. |
| `src/components/` | `SiteHeader`, `SiteFooter`, `MobileCallBar` (sticky mobile call bar), `CtaBand`. |
| `src/pages/` | `/`, `/services/`, `/services/[slug]/`, `/small-jobs/`, `/service-areas/`, `/about/`, `/contact/`, `404`. |
| `src/styles/global.css` | Plain modern CSS design system (navy/steel base, safety-orange accent). |
| `static/` | Astro `publicDir`: `robots.txt` and the Sveltia CMS `admin/` — same assets Hugo copies. |

## Data Flow (Astro)

Markdown in `src/content/` is loaded through the content layer, validated against the collection schemas, and rendered to static HTML in `dist/` by `npm run build`. Service detail routes come from `getStaticPaths` over the `services` collection; long-form pages resolve their entry by id from the `pages` collection.

## Legacy Hugo Files (frozen)

| Path | Role |
| --- | --- |
| `hugo.toml` | Hugo config; canonical source for title, description, phone, email, and menus. |
| `content/` | Original Hugo content (TOML frontmatter). Left in place untouched. |
| `layouts/`, `themes/`, `archetypes/` | Hugo theme and templates (Ananke is a git submodule). |
| `public/`, `resources/` | Generated Hugo output, tracked in git. Do not edit; slated for removal post-merge. |
| `netlify.toml` | Netlify build settings, still Hugo-based until the cutover. |

## SEO / JSON-LD

The homepage emits a minimal `LocalBusiness` JSON-LD containing only fields that exist in `hugo.toml`/content: name, url, description, telephone, email, and `areaServed` (towns named in the content). No reviews, ratings, coordinates, or credentials are asserted.
