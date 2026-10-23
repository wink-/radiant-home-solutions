---
type: Guide
title: Design Mockups
description: Static HTML mockup workflow for Radiant Home Solutions — gallery, baseline, and dated design variants that only override the real stylesheet.
tags: [design, mockups, workflow, css]
generated:
  by: "Design mockup agent (OpenCode)"
  at: "2026-10-23T20:22:19Z"
status: active
---

# Design Mockups

Plain static HTML for exploring homepage design directions. Mockups are **not** Astro
routes and never live in `public/` or `dist/`; the Astro build ignores this folder.
Start at `index.html` (the gallery) or open any mockup directly.

## Layout

```text
mockups/
├── index.html                        # dark gallery: labeled iframes + full-size links + legend
├── current/                          # BASELINE — homepage as shipped (no-op variant.css)
│   ├── index.html
│   └── variant.css
└── 2026-10-24-estimate-first/        # VARIANT — "estimate-first" concept
    ├── index.html                    # byte-identical to current/index.html
    └── variant.css                   # the only difference between the two mockups
```

## Workflow rules

1. **One variable at a time.** Each variant changes styling only, in this order:
   tokens → type → components → layout. Never mix unrelated concerns in one variant.
2. **Dated variant folders.** Name them `YYYY-MM-DD-<concept>/`, each with its own
   `variant.css`. Never edit a merged variant in place; add a new dated folder.
3. **Variants link the REAL stylesheet and only override.** Every mockup links
   `../../src/styles/global.css` (the production stylesheet) and may only add
   `variant.css` overrides. Never copy, fork, or edit `global.css` from a mockup.
4. **Identical markup.** Variant `index.html` files are byte-identical to
   `current/index.html` (see "Shared markup scaffold" below). If a concept needs
   markup the homepage doesn't have, add it to the shared scaffold in *all* copies
   — inert in the baseline, activated by the variant's CSS — and document it here.
5. **Real content only.** Copy, prices, towns, and contact details come from the live
   pages (`src/pages/`, `src/site.config.ts`). The phone number `(555) 123-4567` and
   `info@radianthomesolutions.com` are known placeholders (see `docs/notes.md`) —
   reuse them verbatim; never invent replacements.
6. **No JS, no external assets.** Mockups are pure HTML + the real CSS + `variant.css`.
7. **Verdicts are documented.** After review, record the outcome (adopt / reject /
   iterate, and why) in `docs/notes.md`, and note the work in `docs/log.md`.

## Promotion path

A mockup never ships directly. To adopt a concept:

```text
mockups/<date>-<name>/ verdict: adopt
  → branch design/<name> off feature/astro-rebuild
  → apply the concept to the real Astro components + src/styles/global.css
  → open a PR into feature/astro-rebuild
```

## Shared markup scaffold

`current/index.html` is a faithful static reproduction of the live homepage (header,
hero + primary CTA, services grid, service-area strip, why-us cards, trust strip,
CTA band, footer, mobile call bar) using the real class names and real content from
`src/`. To support CSS-only variants it also contains one extra scaffold element:

- Repeatable copies of the real `CtaBand` markup sit after each major section,
  marked with the standard `hidden` attribute. The baseline renders exactly like
  the live homepage; the `2026-10-24-estimate-first` variant reveals them with a
  single CSS rule (`.cta-band[hidden] { display: block; }`) so the "CTA band
  repeated after each section" idea can be judged without touching markup.

If the concept is rejected, the scaffold copies go with it; nothing in `src/` changes.

## Variant log

| Folder | Concept | Intent | Verdict |
| --- | --- | --- | --- |
| `2026-10-24-estimate-first/` | Estimate-first | Hotter CTA orange tokens, bigger click-to-call typography, CTA band repeated after each section, larger body type scale, higher-contrast service cards. Goal: a homeowner is never a screen away from an obvious way to call. | Pending review (record in `docs/notes.md`) |
