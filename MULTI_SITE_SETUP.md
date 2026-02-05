# Multi-Site Setup Summary

## Current State Analysis

### Repository Structure
- **Single repository**: `tutornew_webnew` (GitHub: fridowicke/tutornew_webnew)
- **Stack**: Eleventy (11ty) static site generator
- **Current deployment**: GitHub Actions workflow exists, deploys from `_site/` to GitHub Pages
- **CNAME**: `tutor.new` configured
- **Structure**:
  - `src/` - Main site content (legacy, being migrated)
  - `sites/tutor.new/` - Tutor.new site content (already exists)
  - `sites/open.tutor.new/` - Open.tutor.new site content (newly created)
  - `shared/` - Shared assets, layouts, and partials
  - `.eleventy.js` - Root Eleventy config (legacy)

### What Was Duplicated
- Layouts existed in both `src/_includes/` and `sites/tutor.new/_includes/`
- Assets scattered across root directory and `shared/assets/`
- Single build config that only handled one site

### What's Now Shared
- ✅ Shared build workflow (`.github/workflows/shared-build.yml`)
- ✅ Shared assets (`shared/assets/`)
- ✅ Shared layouts (`shared/layouts/` and `shared/partials/`)
- ✅ Site-specific Eleventy configs that reference shared resources

## Architecture Decision: Option B (Monorepo) - Refined

**Chosen**: Monorepo with `/sites/tutor.new` and `/sites/open.tutor.new`, shared infrastructure, separate deployments

### Rationale
1. **Single source of truth**: All code in one place, easy to maintain
2. **Shared infrastructure**: Build logic, assets, and layouts shared without duplication
3. **Independent deployments**: Each site deploys separately via GitHub Actions
4. **Low ceremony**: Simple for small teams, no complex git subtree/submodule setup
5. **Same stack**: Both sites use Eleventy, so shared configs work well
6. **Flexibility**: Sites can override shared layouts/assets when needed

### Trade-offs
- **GitHub Pages limitation**: Only one site per repo can use GitHub Pages directly
- **Solution**: Deploy `open.tutor.new` to a separate repository via GitHub Actions
- **Alternative considered**: Two separate repos with shared workflows, but this adds complexity

## Implementation Details

### File Changes Created/Modified

#### New Files
1. `.github/workflows/shared-build.yml` - Reusable build workflow
2. `.github/workflows/deploy-tutor-new.yml` - Deploys tutor.new to this repo's Pages
3. `.github/workflows/deploy-open-tutor-new.yml` - Deploys open.tutor.new to separate repo
4. `sites/tutor.new/.eleventy.js` - Site-specific Eleventy config
5. `sites/open.tutor.new/.eleventy.js` - Site-specific Eleventy config
6. `sites/tutor.new/CNAME` - Custom domain for tutor.new
7. `sites/open.tutor.new/CNAME` - Custom domain for open.tutor.new
8. `sites/open.tutor.new/index.html` - Initial open.tutor.new homepage
9. `sites/open.tutor.new/_includes/layouts/base.njk` - Base layout for open site
10. `sites/open.tutor.new/_includes/layouts/simple.njk` - Simple layout for open site
11. `DEPLOYMENT.md` - Deployment guide
12. `MULTI_SITE_SETUP.md` - This file

#### Modified Files
1. `package.json` - Added site-specific build scripts
2. `.gitignore` - Added build output directories
3. `README.md` - Updated for multi-site structure

### Directory Structure

```
tutornew_webnew/
├── sites/
│   ├── tutor.new/
│   │   ├── .eleventy.js      # Site config (references shared assets)
│   │   ├── CNAME             # tutor.new domain
│   │   ├── _includes/        # Site-specific layouts (optional overrides)
│   │   └── *.html            # Site pages
│   └── open.tutor.new/
│       ├── .eleventy.js      # Site config (references shared assets)
│       ├── CNAME             # open.tutor.new domain
│       ├── _includes/        # Site-specific layouts
│       └── *.html            # Site pages
├── shared/
│   ├── assets/               # Shared CSS, JS, images
│   ├── layouts/              # Shared Eleventy layouts
│   └── partials/             # Shared Eleventy partials
├── .github/workflows/
│   ├── shared-build.yml           # Reusable build workflow
│   ├── deploy-tutor-new.yml      # Deploys tutor.new
│   └── deploy-open-tutor-new.yml # Deploys open.tutor.new
└── package.json              # Build scripts
```

### How Shared Infrastructure Works

#### Shared Build Workflow
- **Location**: `.github/workflows/shared-build.yml`
- **Type**: `workflow_call` (reusable workflow)
- **Inputs**: Site name, input dir, output dir, config file
- **Outputs**: Artifact path
- **Usage**: Called by both site-specific deploy workflows

#### Shared Assets
- **Location**: `shared/assets/`
- **Copied during build**: Each site's Eleventy config copies needed assets
- **Update process**: Edit in `shared/assets/`, push triggers both site rebuilds

#### Shared Layouts
- **Location**: `shared/layouts/` and `shared/partials/`
- **Usage**: Sites can reference: `layout: ../../shared/layouts/base.njk`
- **Override**: Sites can have their own in `sites/{site}/_includes/layouts/`

### Deployment Architecture

#### tutor.new
- **Repository**: Current repo (tutornew_webnew)
- **Deployment**: GitHub Actions → GitHub Pages (this repo)
- **Domain**: tutor.new (via CNAME)
- **Workflow**: `.github/workflows/deploy-tutor-new.yml`
- **Trigger**: Changes to `sites/tutor.new/**` or `shared/**`

#### open.tutor.new
- **Repository**: Separate repository (to be created)
- **Deployment**: GitHub Actions → External repository's GitHub Pages
- **Domain**: open.tutor.new (via CNAME in separate repo)
- **Workflow**: `.github/workflows/deploy-open-tutor-new.yml`
- **Trigger**: Changes to `sites/open.tutor.new/**` or `shared/**`
- **Requires**: Personal Access Token (PAT) with `repo` scope

### DNS Configuration

#### tutor.new (Apex Domain)
- **Type**: CNAME or ALIAS
- **Name**: `@` (or blank)
- **Value**: `fridowicke.github.io` (or your GitHub Pages domain)

#### open.tutor.new (Subdomain)
- **Type**: CNAME
- **Name**: `open`
- **Value**: `{username}.github.io` (GitHub Pages domain of separate repo)

## Operator Checklist

### Initial Setup (One-Time)

#### For tutor.new (Current Repo)
- [x] Repository exists and is configured
- [x] GitHub Pages enabled (Settings > Pages)
- [x] Source: Deploy from a branch → `gh-pages` OR GitHub Actions
- [x] Custom domain: `tutor.new` (configured via CNAME file)
- [x] DNS: CNAME record pointing to GitHub Pages

#### For open.tutor.new (Separate Repo Required)
- [ ] Create new repository (e.g., `fridowicke/open-tutor-new`)
- [ ] Generate Personal Access Token:
  - GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)
  - Create token with `repo` scope
  - Copy token value
- [ ] Add secret to **current repository** (tutornew_webnew):
  - Settings > Secrets and variables > Actions > New repository secret
  - Name: `OPEN_TUTOR_NEW_DEPLOY_TOKEN`
  - Value: Your PAT
- [ ] Update workflow (`.github/workflows/deploy-open-tutor-new.yml`):
  - Uncomment: `github_token: ${{ secrets.OPEN_TUTOR_NEW_DEPLOY_TOKEN }}`
  - Uncomment and set: `external_repository: fridowicke/open-tutor-new`
- [ ] Configure GitHub Pages in new repository:
  - Settings > Pages > Source: Deploy from a branch
  - Branch: `gh-pages`
  - Custom domain: `open.tutor.new`
- [ ] Set up DNS: CNAME record for `open.tutor.new`

### Regular Operations

#### Deploying Changes
1. Make changes to site content in `sites/{site}/`
2. Or update shared assets in `shared/`
3. Commit and push to `main` branch
4. GitHub Actions automatically builds and deploys
5. Verify deployment in Actions tab

#### Updating Shared Infrastructure
1. Edit files in `/shared/` directory
2. Push changes (triggers both site rebuilds)
3. Verify both sites reflect changes

#### Testing Locally
```bash
# Build both sites
npm run build

# Serve tutor.new
npm run serve:tutor-new

# Serve open.tutor.new
npm run serve:open-tutor-new

# Development mode (with watch)
npm run dev:tutor-new
npm run dev:open-tutor-new
```

### Troubleshooting

#### Build Fails
- Check Actions logs for specific errors
- Verify Node.js version (should be 20)
- Run `npm ci` locally to test

#### Site Not Updating
- Check GitHub Pages settings
- Verify deployment workflow completed
- Check DNS propagation (can take 48 hours)

#### CNAME Conflicts
- Each site has its own CNAME in `sites/{site}/CNAME`
- Build process copies correct CNAME to output
- Verify CNAME exists and is correct

## Smoke Checks

### Build Verification
- ✅ Build artifact directory exists after build
- ✅ Build artifact contains files (not empty)
- ✅ CNAME file is present in build output
- ✅ Shared assets are copied correctly

### Deployment Verification
- ✅ Workflow completes without errors
- ✅ GitHub Pages shows latest deployment
- ✅ Custom domain resolves correctly
- ✅ Site content is up-to-date

## Next Steps

1. **Create separate repository** for open.tutor.new
2. **Set up PAT and secret** as described above
3. **Update workflow** with external repository name
4. **Configure DNS** for both domains
5. **Test deployment** by making a small change
6. **Migrate remaining content** from `src/` to `sites/tutor.new/` over time

## Notes

- The old `.eleventy.js` in root and `src/` directory are legacy and can be migrated over time
- Both sites can independently deploy without affecting each other
- Shared infrastructure updates trigger rebuilds for both sites
- Each site can override shared layouts/assets when needed

