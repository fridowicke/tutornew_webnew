# Setup Guide for open.tutor.new

This guide will help you set up the separate repository and deployment for open.tutor.new.

## Step 1: Create the Separate Repository

1. Go to https://github.com/new
2. Repository name: `open-tutor-new` (or `open.tutor.new` - GitHub will convert dots to hyphens)
3. Description: "Open source documentation site for tutor.new"
4. Visibility: Public (recommended for open source)
5. **Do NOT** initialize with README, .gitignore, or license (we'll deploy to it)
6. Click "Create repository"

**Note the repository name** - you'll need it for Step 3.

## Step 2: Generate Personal Access Token (PAT)

1. Go to GitHub Settings: https://github.com/settings/profile
2. Scroll down to "Developer settings" (left sidebar)
3. Click "Personal access tokens" > "Tokens (classic)"
4. Click "Generate new token" > "Generate new token (classic)"
5. Give it a name: `open-tutor-new-deploy`
6. Set expiration: Choose your preference (90 days, 1 year, or no expiration)
7. **Select scopes**: Check `repo` (this gives full repository access)
8. Click "Generate token"
9. **IMPORTANT**: Copy the token immediately - you won't be able to see it again!

## Step 3: Add Secret to Current Repository

1. Go to your current repository: https://github.com/fridowicke/tutornew_webnew
2. Click "Settings" (top menu)
3. Click "Secrets and variables" > "Actions"
4. Click "New repository secret"
5. Name: `OPEN_TUTOR_NEW_DEPLOY_TOKEN`
6. Secret: Paste the PAT you copied in Step 2
7. Click "Add secret"

## Step 4: Update the Workflow

The workflow file (`.github/workflows/deploy-open-tutor-new.yml`) needs to be updated with your repository name.

**Option A: I'll update it for you** (if you tell me the repo name)
**Option B: You update it manually**:
1. Open `.github/workflows/deploy-open-tutor-new.yml`
2. Find the line with `# external_repository: fridowicke/open-tutor-new`
3. Uncomment it and replace with your actual repository name
4. Also uncomment: `github_token: ${{ secrets.OPEN_TUTOR_NEW_DEPLOY_TOKEN }}`
5. Comment out: `github_token: ${{ secrets.GITHUB_TOKEN }}`

## Step 5: Configure GitHub Pages in New Repository

**Note**: Since the repository is empty, you have two options:

### Option A: Configure after first deployment (Recommended)
1. Skip this step for now
2. After the first deployment runs (Step 7), come back here
3. Go to your new repository Settings > Pages
4. The `gh-pages` branch will now exist
5. Select "Deploy from a branch" > Branch: `gh-pages` > Save
6. Under "Custom domain": Enter `open.tutor.new`
7. Check "Enforce HTTPS" (after DNS is configured)

### Option B: Create empty branch first
1. Go to your new repository
2. Click "Create a new file" (or use the web interface)
3. Create a file named `.gitkeep` (or any file)
4. Commit directly to a new branch called `gh-pages`
5. Now go to Settings > Pages
6. Source: "Deploy from a branch"
7. Branch: `gh-pages`
8. Folder: `/ (root)`
9. Click "Save"
10. Under "Custom domain": Enter `open.tutor.new`
11. Check "Enforce HTTPS" (after DNS is configured)

## Step 6: Configure DNS

You need to add a CNAME record for the subdomain:

1. Go to your DNS provider (where you manage tutor.new)
2. Add a new CNAME record:
   - **Type**: CNAME
   - **Name**: `open` (this creates the `open.tutor.new` subdomain)
   - **Value**: `{your-username}.github.io` (e.g., `fridowicke.github.io`)
   - **TTL**: 3600 (or default)

**Note**: DNS propagation can take up to 48 hours, but usually happens within minutes.

## Step 7: Test the Deployment

1. Make a small change to `sites/open.tutor.new/index.html`
2. Commit and push to `main` branch
3. Go to Actions tab in your repository
4. Watch the "Deploy open.tutor.new" workflow run
5. Once complete, check:
   - The new repository should have a `gh-pages` branch with the built site
   - https://open.tutor.new should show your site (after DNS propagates)

## Verification Checklist

- [ ] Separate repository created
- [ ] PAT generated and saved
- [ ] Secret added to tutornew_webnew repository
- [ ] Workflow file updated with repository name
- [ ] GitHub Pages configured in new repository
- [ ] DNS CNAME record added
- [ ] Test deployment completed successfully
- [ ] Site accessible at open.tutor.new

## Troubleshooting

### Workflow fails with "Permission denied"
- Check that the PAT has `repo` scope
- Verify the secret name is exactly `OPEN_TUTOR_NEW_DEPLOY_TOKEN`
- Make sure the PAT hasn't expired

### Site not updating
- Check that the workflow completed successfully
- Verify the `gh-pages` branch exists in the new repository
- Check GitHub Pages settings in the new repository

### DNS not working
- Verify CNAME record is correct
- Check DNS propagation: `dig open.tutor.new` or use online tools
- Wait up to 48 hours for full propagation

### Build fails
- Check Actions logs for specific errors
- Verify Node.js version (should be 20)
- Ensure all dependencies are in package.json

