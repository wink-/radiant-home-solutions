---
type: Notes
title: Notes
description: Repo-specific notes and gotchas for Radiant Home Solutions.
tags: [notes, astro, hugo]
generated:
  by: "Astro rebuild agent (OpenCode)"
  at: "2026-10-23T16:23:28Z"
status: rebuilding
---

# Notes

## Contact Details Look Like Placeholders

`hugo.toml` sets `phone = "(555) 123-4567"` and `email = "info@radianthomesolutions.com"`. The phone uses the reserved fictional `555` range. The Astro site reuses these values verbatim (never inventing new ones) so CTAs, `tel:` links, and JSON-LD stay consistent with the source — but both values must be confirmed and replaced with real production details before launch. All values live in one place: `src/site.config.ts`.

## Astro × Hugo Coexistence Gotchas

- **`public/` collision:** Astro's default `publicDir` is `public/`, which in this repo is tracked, Hugo-generated output. `astro.config.mjs` therefore sets `publicDir: './static'`, mirroring Hugo's own behavior (copies `robots.txt` + Sveltia `admin/`). If you delete the Hugo `public/` dir post-merge, consider switching `publicDir` back to `./public`.
- **Redirect:** the Hugo page lived at `/areas-served/`; the Astro page is `/service-areas/`. `astro.config.mjs` redirects the old URL (static build emits a meta-refresh page). Netlify-level 301s could replace this later.
- **Ananke is a git submodule** (`themes/ananke`) — clone with `--recursive` or run `git submodule update --init` before any Hugo build.

## Content Migration Decisions (Astro rebuild)

- Hugo had no individual service pages — only `content/services/_index.md` with 8 service categories. The Astro `services` collection derives one page per category, with copy taken from that source (plus pricing details stated elsewhere in the same file).
- Homepage is a purpose-built conversion layout (hero, services grid, town strip, why-us, CTA). Detailed copy from the old Hugo homepage (pricing breakdowns, FAQs, emergency list) is preserved on `/services/`, `/small-jobs/`, and `/contact/`.
- Testimonials and the pseudo "service request form" from `contact.md`/`areas-served.md` were **not** carried into the Astro pages (unverifiable quotes; a form that cannot submit). The originals remain untouched under `content/` for reference.
- JSON-LD is limited to truthy fields from `hugo.toml`/content. The old Hugo layout asserted geo coordinates and an offer catalog; those were dropped.

## Misc

- `netlify.toml` pins Hugo to `0.147.9` and publishes `public/`; the Astro cutover changes build command to `npm run build` and publish dir to `dist/`.
- `robots.txt` (in `static/`) references a `sitemap.xml`; the Astro build does not generate one yet.
- Content frontmatter historically used TOML (`+++`); Astro content uses YAML (`---`).
