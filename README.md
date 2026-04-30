# tutor.new Website

This repository contains the tutor.new website, built with [11ty (Eleventy)](https://www.11ty.dev/).

## Quick Start

```bash
npm install
npm run build
npm run serve:tutor-new
```

For development with file watching:

```bash
npm run dev:tutor-new
```

Build output is written to `_site-tutor-new/`.

## Project Structure

```text
tutornew_webnew/
├── sites/
│   └── tutor.new/          # Site content
│       ├── .eleventy.js    # Eleventy config
│       ├── CNAME           # Custom domain
│       ├── _includes/      # Site layouts and partials
│       └── *.html          # Site pages
├── shared/
│   └── assets/             # Shared CSS, JS, images, and static assets
├── scripts/
│   └── verify-setup.sh     # Local verification script
├── _site-tutor-new/        # Build output
└── package.json
```

The `src/` directory contains legacy pages and should not be used for new tutor.new work.

## Adding a Page

Create a new file in `sites/tutor.new/` with front matter:

```yaml
---
layout: layouts/main.njk
title: Page Title
lang: de
pageStyles: |
  /* Page-specific CSS here */
---

Your HTML content here
```

## Deployment

tutor.new deploys via GitHub Actions using `.github/workflows/deploy-tutor-new.yml`.

Run the verification script before deployment:

```bash
./scripts/verify-setup.sh
```
