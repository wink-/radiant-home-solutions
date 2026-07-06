---
type: Setup
title: Setup
description: Local setup and validation for Radiant Home Solutions.
tags: [setup, hugo, netlify]
timestamp: 2026-07-06T00:00:00Z
---

# Setup

## Requirements

- Hugo, matching the Netlify `HUGO_VERSION` when possible: `0.147.9`.
- Git.

## Local Preview

```bash
hugo server -D
```

## Production Build

```bash
hugo --gc --minify
```

Netlify publishes the generated `public/` directory.

## Lightweight Validation

```bash
git status --short --branch
git diff --check
```

If Hugo is not installed, skip the Hugo build and record that limitation.
