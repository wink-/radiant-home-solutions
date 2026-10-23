---
okf_version: "0.1"
---

# Radiant Home Solutions Docs

Radiant Home Solutions is a conversion-focused marketing site for local small-job handyman services in Horseheads, Corning, Elmira, and the surrounding Southern Tier. The site is being rebuilt from Hugo/Ananke to Astro 7 on the `feature/astro-rebuild` branch (Hugo files frozen and untouched until post-merge cleanup).

## Start Here

| File | Purpose |
| --- | --- |
| [architecture.md](architecture.md) | Runtime shape (Astro + frozen Hugo) and key files. |
| [setup.md](setup.md) | Local setup, preview, and build for both stacks. |
| [status.md](status.md) | Current phase, next tasks, and risks. |
| [notes.md](notes.md) | Site-specific gotchas and migration decisions. |
| [log.md](log.md) | Chronological project/documentation history. |

## Main Project Files

- `src/site.config.ts` — single source of truth for contact info, nav, and service areas.
- `src/content/` — Astro content: 8 service pages plus migrated long-form pages.
- `src/pages/` — Astro routes (home, services, service areas, small jobs, about, contact, 404).
- `astro.config.mjs` — site URL, `publicDir`, and the legacy URL redirect.
- `hugo.toml` + `content/` + `netlify.toml` — legacy Hugo site (frozen until post-merge cleanup).

## Resume Path

- Read [status.md](status.md) for the current phase and next work.
- Read [notes.md](notes.md) before changing contact details, build config, or removing Hugo files.
