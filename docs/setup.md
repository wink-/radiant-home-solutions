---
type: Setup
title: Setup
description: Local setup and validation for Radiant Home Solutions.
tags: [setup, astro, hugo, netlify]
generated:
  by: "Astro rebuild agent (OpenCode)"
  at: "2026-10-23T16:23:28Z"
status: rebuilding
---

# Setup

## Requirements

- Node.js (LTS) and npm — for the Astro site.
- Hugo `0.147.9` (matching `netlify.toml`) — only if building the legacy Hugo site.

## Astro (new stack)

```bash
npm install          # once
npm run dev          # local dev server
npm run build        # production build to dist/
npm run preview      # preview the production build
```

`npm run build` is the source of truth for validation; it must pass with zero warnings and zero errors.

## Hugo (legacy, frozen)

```bash
hugo server -D
hugo --gc --minify   # outputs public/
```

Hugo files are kept untouched during the Astro rebuild; do not edit `content/`, `hugo.toml`, `layouts/`, or `themes/` for Astro work.

## Deployment

- Current `netlify.toml` still runs `hugo --gc --minify` and publishes `public/`.
- After the Astro branch merges, repoint Netlify to build command `npm run build` with publish directory `dist/` (see `docs/status.md`).

## Lightweight Validation

```bash
git status --short --branch
git diff --check
```
