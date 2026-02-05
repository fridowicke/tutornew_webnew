# Setup Checklist for open.tutor.new

Use this checklist to track your progress setting up the separate repository for open.tutor.new.

## Prerequisites
- [x] Monorepo structure created
- [x] Build scripts configured
- [x] Workflows created
- [x] Both sites build successfully

## Required Steps (You Need to Do These)

### 1. Create Separate Repository
- [ ] Go to https://github.com/new
- [ ] Repository name: `open-tutor-new` (or your preferred name)
- [ ] Make it public
- [ ] **Do NOT** initialize with any files
- [ ] Create the repository
- [ ] **Note the full repository name**: `fridowicke/open-tutor-new` (replace with your username)

### 2. Generate Personal Access Token
- [ ] Go to https://github.com/settings/tokens
- [ ] Click "Generate new token" > "Generate new token (classic)"
- [ ] Name: `open-tutor-new-deploy`
- [ ] Expiration: Your choice (90 days, 1 year, or no expiration)
- [ ] **Check the `repo` scope** (full control of private repositories)
- [ ] Generate token
- [ ] **Copy the token immediately** (you won't see it again!)

### 3. Add Secret to Current Repository
- [ ] Go to https://github.com/fridowicke/tutornew_webnew/settings/secrets/actions
- [ ] Click "New repository secret"
- [ ] Name: `OPEN_TUTOR_NEW_DEPLOY_TOKEN`
- [ ] Value: Paste the PAT from step 2
- [ ] Add secret

### 4. Update Workflow File
- [ ] Open `.github/workflows/deploy-open-tutor-new.yml`
- [ ] Find line 58: `github_token: ${{ secrets.OPEN_TUTOR_NEW_DEPLOY_TOKEN || secrets.GITHUB_TOKEN }}`
- [ ] This is already correct (uses PAT if available, falls back to GITHUB_TOKEN)
- [ ] Find line 61: `# external_repository: fridowicke/open-tutor-new`
- [ ] Uncomment it and replace `fridowicke/open-tutor-new` with your actual repository name
- [ ] Save and commit the change

### 5. Configure GitHub Pages in New Repository

**Option A: After first deployment (Recommended)**
- [ ] Skip for now, configure after Step 7
- [ ] After first deployment, go to Settings > Pages
- [ ] Select "Deploy from a branch" > Branch: `gh-pages` > Save
- [ ] Under "Custom domain": Enter `open.tutor.new`
- [ ] Check "Enforce HTTPS" (after DNS is configured)

**Option B: Create branch first**
- [ ] Create an empty file in the new repository
- [ ] Commit to a new branch called `gh-pages`
- [ ] Settings > Pages
- [ ] Source: "Deploy from a branch" > Branch: `gh-pages`
- [ ] Folder: `/ (root)` > Save
- [ ] Under "Custom domain": Enter `open.tutor.new`
- [ ] Check "Enforce HTTPS" (after DNS is configured)

### 6. Configure DNS
- [ ] Go to your DNS provider (where you manage tutor.new domain)
- [ ] Add CNAME record:
  - Type: CNAME
  - Name: `open`
  - Value: `fridowicke.github.io` (replace with your GitHub username)
  - TTL: 3600 (or default)
- [ ] Save the DNS record
- [ ] Wait for propagation (can take up to 48 hours, usually minutes)

### 7. Test Deployment
- [ ] Make a small change to `sites/open.tutor.new/index.html` (e.g., add a comment)
- [ ] Commit and push to `main` branch
- [ ] Go to Actions tab in tutornew_webnew repository
- [ ] Watch "Deploy open.tutor.new" workflow run
- [ ] Verify it completes successfully
- [ ] Check the new repository - should have `gh-pages` branch
- [ ] Visit https://open.tutor.new (after DNS propagates)

## Verification

Run the verification script:
```bash
./scripts/verify-setup.sh
```

Or manually check:
- [ ] Both sites build: `npm run build`
- [ ] Workflow file has external_repository uncommented
- [ ] Secret exists in repository settings
- [ ] New repository exists and has Pages enabled
- [ ] DNS record is configured
- [ ] Test deployment works

## Troubleshooting

### Workflow fails with permission error
- Verify PAT has `repo` scope
- Check secret name is exactly `OPEN_TUTOR_NEW_DEPLOY_TOKEN`
- Ensure PAT hasn't expired

### Site not accessible
- Check DNS propagation: `dig open.tutor.new` or use online tools
- Verify GitHub Pages is enabled in new repository
- Check that `gh-pages` branch exists in new repository

### Build fails
- Check Actions logs for specific errors
- Run locally: `npm run build:open-tutor-new`
- Verify Node.js version (should be 20)

## Quick Reference

**Repository to create**: `fridowicke/open-tutor-new` (replace with your username)
**Secret name**: `OPEN_TUTOR_NEW_DEPLOY_TOKEN`
**DNS CNAME**: `open` → `fridowicke.github.io` (replace with your username)
**Custom domain**: `open.tutor.new`

