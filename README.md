# tutor.new & open.tutor.new Websites

This monorepo contains two separate websites built with [11ty (Eleventy)](https://www.11ty.dev/):

1. **tutor.new** - Main educational platform website
2. **open.tutor.new** - Open source documentation site

Both sites share infrastructure (build logic, shared assets, layouts) while maintaining independent deployments.

## Quick Start

```bash
# Install dependencies
npm install

# Build both sites
npm run build

# Build individual sites
npm run build:tutor-new
npm run build:open-tutor-new

# Serve locally
npm run serve:tutor-new      # Serves tutor.new at http://localhost:8080
npm run serve:open-tutor-new # Serves open.tutor.new at http://localhost:8080

# Development mode (with watch)
npm run dev:tutor-new
npm run dev:open-tutor-new
```

Build outputs:
- `_site-tutor-new/` - tutor.new build output
- `_site-open-tutor-new/` - open.tutor.new build output

## Project Structure

```
tutornew_webnew/
├── sites/
│   ├── tutor.new/          # Main site content
│   │   ├── .eleventy.js    # Site-specific Eleventy config
│   │   ├── CNAME           # Custom domain (tutor.new)
│   │   ├── _includes/      # Site-specific layouts (optional)
│   │   └── *.html          # Site pages
│   └── open.tutor.new/     # Open source site content
│       ├── .eleventy.js
│       ├── CNAME           # Custom domain (open.tutor.new)
│       └── *.html
├── shared/
│   ├── assets/             # Shared static assets (CSS, JS, images)
│   │   ├── styles.css
│   │   ├── common.js
│   │   ├── i18n.js
│   │   ├── media-outlets/
│   │   ├── tutors/
│   │   └── ...
│   ├── layouts/            # Shared Eleventy layouts
│   └── partials/           # Shared Eleventy partials
├── .github/
│   └── workflows/
│       ├── shared-build.yml           # Reusable build workflow
│       ├── deploy-tutor-new.yml      # Deploys tutor.new
│       └── deploy-open-tutor-new.yml  # Deploys open.tutor.new
├── _site-tutor-new/        # tutor.new build output (gitignored)
├── _site-open-tutor-new/   # open.tutor.new build output (gitignored)
└── package.json            # Build scripts and dependencies
```

**Note**: The `src/` directory is legacy and will be migrated to `sites/tutor.new/` over time.

## Adding a New Page

### For tutor.new
Create a new file in `sites/tutor.new/` with front matter:

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

### For open.tutor.new
Create a new file in `sites/open.tutor.new/` with similar front matter.

## Shared Infrastructure

### Shared Assets
- **Location**: `/shared/assets/`
- Both sites automatically copy these during build
- Update shared CSS, JS, or images here

### Shared Layouts
- **Location**: `/shared/layouts/` and `/shared/partials/`
- Sites can reference these: `layout: ../../shared/layouts/base.njk`
- Sites can override with their own layouts in `sites/{site}/_includes/layouts/`

## Deployment

Both sites deploy automatically via GitHub Actions when you push to `main`:

- **tutor.new**: Deploys to this repository's GitHub Pages
- **open.tutor.new**: Deploys to a separate repository (requires setup)

### Quick Setup

1. **For tutor.new**: Already configured! Just push to `main` and it will deploy.

2. **For open.tutor.new**: Follow the setup guide:
   - See `SETUP_OPEN_TUTOR_NEW.md` for step-by-step instructions
   - Or use `scripts/setup-checklist.md` as a checklist

### Documentation

- `DEPLOYMENT.md` - Detailed deployment guide, DNS setup, and troubleshooting
- `SETUP_OPEN_TUTOR_NEW.md` - Step-by-step setup for open.tutor.new
- `MULTI_SITE_SETUP.md` - Architecture and implementation details
- `scripts/verify-setup.sh` - Verification script to check your setup

### Verify Setup

Run the verification script:
```bash
./scripts/verify-setup.sh
```
