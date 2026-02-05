# Deployment Guide

This repository contains two separate websites that deploy to different GitHub Pages sites:

1. **tutor.new** - Main website (deploys to this repository's GitHub Pages)
2. **open.tutor.new** - Open source documentation site (deploys to a separate repository)

## Architecture

- **Monorepo structure**: Both sites share infrastructure (build logic, shared assets, layouts)
- **Shared assets**: Located in `/shared/assets/` and `/shared/layouts/`
- **Site-specific content**: Located in `/sites/tutor.new/` and `/sites/open.tutor.new/`
- **Independent deployments**: Each site builds and deploys separately

## Prerequisites

### For tutor.new (Current Repository)
- This repository is already configured
- GitHub Pages is enabled in repository settings
- Custom domain: `tutor.new` (configured via CNAME)

### For open.tutor.new (Separate Repository Required)
Since GitHub Pages only supports one site per repository, you need to:

1. **Create a new repository** (e.g., `fridowicke/open-tutor-new` or `fridowicke/open.tutor.new`)
2. **Add a Personal Access Token (PAT)**:
   - Go to GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)
   - Create a token with `repo` scope
   - Add it as a secret in **this repository** (not the new one):
     - Go to this repo's Settings > Secrets and variables > Actions
     - Add secret: `OPEN_TUTOR_NEW_DEPLOY_TOKEN` with your PAT value
3. **Update the workflow** (`.github/workflows/deploy-open-tutor-new.yml`):
   - Uncomment the line: `github_token: ${{ secrets.OPEN_TUTOR_NEW_DEPLOY_TOKEN }}`
   - Add: `external_repository: fridowicke/open-tutor-new` (replace with your repo name)
4. **Configure GitHub Pages** in the new repository:
   - Settings > Pages > Source: Deploy from a branch
   - Branch: `gh-pages` (or the branch you choose)
   - Custom domain: `open.tutor.new`

## DNS Configuration

### tutor.new
- **Type**: CNAME (or ALIAS if your DNS provider supports it)
- **Name**: `@` (or leave blank for apex domain)
- **Value**: `fridowicke.github.io` (or your GitHub Pages domain)

### open.tutor.new
- **Type**: CNAME
- **Name**: `open`
- **Value**: `fridowicke.github.io` (or the GitHub Pages domain of the separate repo)

## Local Development

### Build both sites
```bash
npm install
npm run build
```

### Build individual sites
```bash
npm run build:tutor-new
npm run build:open-tutor-new
```

### Serve locally
```bash
npm run serve:tutor-new      # Serves tutor.new at http://localhost:8080
npm run serve:open-tutor-new # Serves open.tutor.new at http://localhost:8080
```

### Development mode (with watch)
```bash
npm run dev:tutor-new
npm run dev:open-tutor-new
```

## Deployment

### Automatic Deployment
Both sites deploy automatically when you push to the `main` branch:
- Changes to `sites/tutor.new/**` trigger tutor.new deployment
- Changes to `sites/open.tutor.new/**` trigger open.tutor.new deployment
- Changes to `shared/**` trigger both deployments

### Manual Deployment
You can also trigger deployments manually:
- Go to Actions tab in GitHub
- Select the workflow (Deploy tutor.new or Deploy open.tutor.new)
- Click "Run workflow"

## Updating Shared Infrastructure

### Shared Assets
- **Location**: `/shared/assets/`
- **Usage**: Both sites automatically copy these during build
- **Update**: Edit files in `/shared/assets/` and push to trigger rebuilds

### Shared Layouts
- **Location**: `/shared/layouts/` and `/shared/partials/`
- **Usage**: Sites can reference these in front matter: `layout: ../../shared/layouts/base.njk`
- **Override**: Sites can have their own layouts in `sites/{site}/_includes/layouts/`

### Shared Workflows
- **Location**: `.github/workflows/shared-build.yml`
- **Usage**: Called by both site-specific workflows
- **Update**: Changes affect both sites' builds

## Troubleshooting

### Build fails
1. Check the Actions logs for specific errors
2. Verify Node.js version (should be 20)
3. Ensure all dependencies are installed (`npm ci`)

### Site not updating
1. Check GitHub Pages settings (Settings > Pages)
2. Verify the deployment workflow completed successfully
3. Check DNS propagation (can take up to 48 hours)

### CNAME conflicts
- Each site has its own CNAME file in its directory
- The build process copies the correct CNAME to the output
- Verify the CNAME file exists in `sites/{site}/CNAME`

## File Structure

```
.
├── sites/
│   ├── tutor.new/          # Main site content
│   │   ├── .eleventy.js    # Site-specific Eleventy config
│   │   ├── CNAME           # Custom domain
│   │   ├── _includes/      # Site-specific layouts (optional)
│   │   └── *.html          # Site pages
│   └── open.tutor.new/     # Open source site content
│       ├── .eleventy.js
│       ├── CNAME
│       └── *.html
├── shared/
│   ├── assets/             # Shared static assets (CSS, JS, images)
│   ├── layouts/            # Shared Eleventy layouts
│   └── partials/           # Shared Eleventy partials
├── .github/
│   └── workflows/
│       ├── shared-build.yml           # Reusable build workflow
│       ├── deploy-tutor-new.yml      # Deploys tutor.new
│       └── deploy-open-tutor-new.yml  # Deploys open.tutor.new
└── package.json            # Build scripts and dependencies
```

## Operator Checklist

### Initial Setup
- [ ] Create separate repository for open.tutor.new
- [ ] Generate Personal Access Token with `repo` scope
- [ ] Add `OPEN_TUTOR_NEW_DEPLOY_TOKEN` secret to this repository
- [ ] Update `deploy-open-tutor-new.yml` with external repository name
- [ ] Configure GitHub Pages in both repositories
- [ ] Set up DNS records for both domains

### Regular Updates
- [ ] Push changes to `main` branch
- [ ] Verify workflows run successfully in Actions tab
- [ ] Check both sites are updated correctly
- [ ] Test custom domains are working

### Updating Shared Infrastructure
- [ ] Edit files in `/shared/` directory
- [ ] Push changes (triggers both site rebuilds)
- [ ] Verify both sites reflect changes

