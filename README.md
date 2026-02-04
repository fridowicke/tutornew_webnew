# tutor.new Website

This website is built with [11ty (Eleventy)](https://www.11ty.dev/), a static site generator.

## Quick Start

```bash
# Install dependencies
npm install

# Build the site
npm run build

# Serve locally with auto-reload
npm run serve
```

The site will be generated in the `_site` directory.

## Project Structure

```
tutornew_webnew/
├── src/                    # Source files (templates)
│   ├── _includes/         # Templates and partials
│   │   ├── layouts/      # Base templates
│   │   └── partials/     # Reusable components
│   ├── index.html        # Homepage
│   ├── faq.html          # FAQ page
│   └── ...               # Other pages
├── _site/                # Generated output (gitignored)
├── styles.css            # Global styles
├── common.js             # Shared JavaScript
├── i18n.js               # Internationalization
├── media-outlets/        # Media logos
├── tutors/               # Tutor images
├── didactics_assets/     # Didactics images
├── rewards/              # Reward images
├── blog/                 # Blog posts (legacy, to be migrated)
├── open/                 # Open source page (legacy, to be migrated)
├── privacy/              # Privacy page (legacy, to be migrated)
├── for-llms/             # LLM page (legacy, to be migrated)
├── ugc/                  # UGC content (legacy, to be migrated)
└── *.html                # Legacy HTML files (to be migrated to src/)

# Root level HTML files are legacy and will be migrated to src/
```

## Adding a New Page

Create a new file in `src/` with front matter:

```yaml
---
layout: layouts/main.njk  # or layouts/simple.njk for back button only
title: Page Title
lang: de
pageStyles: |
  /* Page-specific CSS here */
---

Your HTML content here
```

## Migration Status

✅ **Migrated:**
- `index.html` → `src/index.html`
- `faq.html` → `src/faq.html`

📋 **To Migrate:**
- All other `.html` files in root directory
- Subdirectories: `blog/`, `open/`, `privacy/`, `for-llms/`, `ugc/`

See `MIGRATION.md` for detailed migration guide.

## Deployment

The `_site/` directory contains the final static HTML files. Deploy this directory to your hosting provider.

### GitHub Pages
1. Push to repository
2. Configure GitHub Actions to run `npm run build`
3. Deploy from `_site/` directory

### Netlify/Vercel
- Auto-detects 11ty
- Build command: `npm run build`
- Publish directory: `_site`
