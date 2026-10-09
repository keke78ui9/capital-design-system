# Deployment Setup Guide

This guide walks you through setting up npm publishing and GitHub Pages deployment for the Capital Design System.

## Prerequisites

- GitHub account and repository
- npm account (https://www.npmjs.com)
- Node.js 20+ installed

---

## Part 1: GitHub Repository Setup

### Step 1: Update Repository Info

1. **Go to GitHub → Settings → General**
2. Update repository description and URL
3. Add topics: `design-system`, `react`, `storybook`, `components`

### Step 2: Enable GitHub Pages

1. Go to **Settings → Pages**
2. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: Select `gh-pages` (auto-created by workflow)
   - Folder: `/ (root)`
3. Click **Save**

### Step 3: Configure GitHub Actions Permissions

1. Go to **Settings → Actions → General**
2. Under "Workflow permissions":
   - Select **Read and write permissions**
   - Check ✓ **Allow GitHub Actions to create and approve pull requests**
3. Click **Save**

---

## Part 2: npm Publishing Setup

### Step 1: Create npm Account

1. Go to https://www.npmjs.com/signup
2. Create your account
3. Verify your email

### Step 2: Create npm Token

1. Login to npm: https://www.npmjs.com/login
2. Go to **Account Settings → Auth Tokens**
3. Click **Generate New Token**
4. Select **Automation** (for CI/CD)
5. Copy the token (you won't see it again!)

### Step 3: Add Secret to GitHub

1. Go to your GitHub repository
2. **Settings → Secrets and variables → Actions**
3. Click **New repository secret**
4. Name: `NPM_TOKEN`
5. Value: Paste your npm token
6. Click **Add secret**

### Step 4: Update Package Info

Edit your package.json to include:

```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/YOUR_USERNAME/capital-design-system"
  },
  "homepage": "https://YOUR_USERNAME.github.io/capital-design-system",
  "license": "MIT",
  "author": {
    "name": "Your Name",
    "email": "your.email@example.com"
  }
}
```

---

## Part 3: Publishing Workflow

### Automatic Publishing (Recommended)

The GitHub Actions workflows are already configured. Here's how they work:

#### Publishing to npm:
- **Trigger**: Push a git tag matching `v*.*.*`
- **Steps**:
  1. Build the library
  2. Publish to npm
  3. Create GitHub release

**How to publish:**

```bash
# 1. Update version in package.json
npm version patch   # or minor, major
git push origin main

# 2. Create git tag
git tag v0.1.1
git push origin v0.1.1

# Workflow runs automatically and publishes to npm
```

#### Deploying to GitHub Pages:
- **Trigger**: Push to `main` branch
- **Steps**:
  1. Build Storybook
  2. Deploy to GitHub Pages
  3. Available at: https://YOUR_USERNAME.github.io/capital-design-system

**No manual steps needed!** Just push to `main` and GitHub Actions handles it.

### Manual Publishing (Alternative)

If you prefer to publish manually:

```bash
# Login to npm
npm login

# Publish
npm publish --access public

# Create git tag
npm version patch
git push origin main
git push origin --tags
```

---

## Part 4: Verify Setup

### Check npm Publishing

1. Push a test tag: `git tag v0.0.0-test && git push origin v0.0.0-test`
2. Wait for GitHub Actions to complete (check Actions tab)
3. Check npm: https://www.npmjs.com/package/@capital/ui
4. Clean up: `git tag -d v0.0.0-test && git push origin :refs/tags/v0.0.0-test`

### Check GitHub Pages

1. Push to `main` branch
2. Wait for Actions to complete
3. Visit: https://YOUR_USERNAME.github.io/capital-design-system
4. Verify Storybook loads correctly

---

## Part 5: Update URLs

Replace `yourusername` with your actual GitHub username in:

- [x] `package.json` - repository and homepage URLs
- [x] `README.md` - documentation and package links
- [x] `CONTRIBUTING.md` - fork instructions
- [x] `.github/dependabot.yml` - reviewer assignment

---

## Troubleshooting

### npm Publishing Fails
- ✓ Check NPM_TOKEN secret is set correctly
- ✓ Verify token has "automation" scope
- ✓ Ensure version bumped (can't republish same version)
- ✓ Check package name is available on npm

### GitHub Pages Not Updating
- ✓ Verify `gh-pages` branch exists
- ✓ Check Pages settings point to `gh-pages` branch
- ✓ Review Actions tab for build errors
- ✓ Clear browser cache and hard refresh

### Build Failures
- ✓ Check Node.js version (needs 20+)
- ✓ Verify all dependencies installed
- ✓ Run `npm run build-storybook` locally

---

## Continuous Improvement

The following are configured:

- **Automated Dependency Updates**: Dependabot checks for updates weekly
- **PR Templates**: Coming soon
- **Changelog**: Consider adding automatic changelog generation
- **Semantic Versioning**: Follow semver.org conventions

---

## Next Steps

1. Push to GitHub: `git push origin main`
2. Create first tag: `git tag v0.1.0 && git push origin v0.1.0`
3. Check Actions tab for build results
4. Verify npm package and GitHub Pages deployment
5. Start developing components!

---

**Questions?** Check the GitHub Actions logs for detailed error messages.
