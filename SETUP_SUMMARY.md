# Setup Summary & Next Steps

✅ **All deployment infrastructure is now configured!**

## What's Been Set Up

### 1. GitHub Actions Workflows

Two automated workflows are ready:

#### `.github/workflows/publish-npm.yml`
- **Trigger**: When you push a git tag like `v0.1.0`
- **Actions**: Builds library → Publishes to npm
- **Requires**: `NPM_TOKEN` secret configured in GitHub

#### `.github/workflows/deploy-pages.yml`
- **Trigger**: Every push to `main` branch
- **Actions**: Builds Storybook → Deploys to GitHub Pages
- **Requires**: GitHub Pages enabled in repository settings

### 2. npm Package Configuration

✅ Updated `package.json` with:
- Package metadata (name, version, description)
- Repository URL
- Homepage URL  
- License
- Author info
- Keywords
- Proper exports and main/types fields

### 3. npm Configuration

✅ Created `.npmrc`:
- Configured for `@capital/ui` scoped package
- Set to publish publicly
- Prevents accidental registry mistakes

### 4. Storybook Configuration

✅ Updated `.storybook/main.ts`:
- Added base path for GitHub Pages deployment
- Configures Storybook to work at `/capital-design-system/`

### 5. Documentation

✅ Created comprehensive guides:
- **README.md** - Project overview and quick start
- **DEPLOYMENT.md** - Step-by-step deployment guide
- **CONTRIBUTING.md** - Contributing guidelines
- **CHECKLIST.md** - Pre-launch verification checklist
- **.github/dependabot.yml** - Automated dependency updates

### 6. Code Security

✅ Verified:
- ✓ No credentials in code
- ✓ No API keys
- ✓ No secrets exposed
- ✓ Safe to make public

---

## What You Need To Do (Before First Publish)

### Step 1: Update URLs (Customize for Your Repo)

Replace `yourusername` in these files:

1. **package.json**
   - `repository.url`: `https://github.com/YOUR_GITHUB_USERNAME/capital-design-system`
   - `homepage`: `https://YOUR_GITHUB_USERNAME.github.io/capital-design-system`
   - `author.name` and `author.email`

2. **.storybook/main.ts**
   - Change `/capital-design-system/` to your actual repository name if different

3. **README.md**
   - Replace all 4 instances of `yourusername`

4. **CONTRIBUTING.md**
   - Update fork URL

5. **DEPLOYMENT.md**
   - Update configuration instructions

6. **.github/dependabot.yml**
   - Set your GitHub username in `reviewers`

### Step 2: Set Up GitHub (One-time)

1. **Push repository to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/capital-design-system.git
   git branch -M main
   git push -u origin main
   ```

2. **Create npm Token**
   - Go to https://www.npmjs.com/settings/~/tokens
   - Create new "Automation" token
   - Copy the token

3. **Add GitHub Secret**
   - Go to GitHub repo → Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `NPM_TOKEN`
   - Value: Paste your npm token
   - Click "Add secret"

4. **Enable GitHub Pages**
   - Go to GitHub repo → Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `gh-pages`
   - Click "Save"

5. **Set GitHub Actions Permissions**
   - Go to Settings → Actions → General
   - Workflow permissions: "Read and write permissions"
   - Allow GitHub Actions to create pull requests: ✓
   - Click "Save"

### Step 3: Publish First Version

```bash
# 1. Update version
npm version patch   # 0.1.0 → 0.1.1

# 2. Push to main
git push origin main

# 3. Create and push tag
git tag v0.1.1
git push origin v0.1.1

# Workflows run automatically! ✨
```

### Step 4: Verify Everything Works

1. **Check npm Publishing**
   - Go to GitHub repo → Actions tab
   - Look for "Publish to npm" workflow
   - Wait for ✅ completion
   - Visit https://www.npmjs.com/package/@capital/ui

2. **Check GitHub Pages**
   - Go to Actions tab
   - Look for "Deploy Storybook to GitHub Pages" workflow
   - Wait for ✅ completion
   - Visit https://YOUR_USERNAME.github.io/capital-design-system

3. **Test npm Package**
   ```bash
   npm install @capital/ui
   # Should install from npm registry
   ```

---

## File Structure Summary

```
capital-design-system/
├── .github/
│   ├── workflows/
│   │   ├── publish-npm.yml          ✨ npm publishing
│   │   └── deploy-pages.yml         ✨ GitHub Pages
│   └── dependabot.yml               ✨ Dependency updates
├── .storybook/
│   ├── main.ts                      ✨ Updated base path
│   └── preview.tsx
├── src/
│   ├── components/
│   │   └── Button/                  ✨ Example component
│   ├── tokens/
│   │   └── tokens.css               ✨ Design tokens
│   └── index.ts                     ✨ Main export
├── .gitignore
├── .npmrc                           ✨ npm configuration
├── netlify.toml                     ✨ (Optional: Netlify)
├── package.json                     ✨ Updated metadata
├── README.md                        ✨ Documentation
├── DEPLOYMENT.md                    ✨ Setup guide
├── CONTRIBUTING.md                  ✨ Contribution guide
├── CHECKLIST.md                     ✨ Pre-launch checklist
├── vite.config.ts
└── tsconfig.json
```

---

## Important Notes

### GitHub Pages Base Path
- Storybook is configured for path `/capital-design-system/`
- If your repo name is different, update `.storybook/main.ts`
- If using custom domain, set `base: '/'`

### npm Package Naming
- Scoped package: `@capital/ui`
- Public scope (not private)
- If you want different name, update `package.json` and workflows

### Build Issues
- If Storybook build fails, check `.storybook/main.ts` base path
- Run `npm run build-storybook` locally to test
- Check Actions logs for detailed errors

---

## Quick Reference

```bash
# Development
npm run storybook          # Start Storybook dev

# Publishing
npm version patch          # Bump version
git push origin main       # Push code
git tag v0.1.1            # Create tag
git push origin v0.1.1    # Push tag → Triggers workflows

# Maintenance
npm run build             # Build library
npm run lint              # Lint code
npm run build-storybook   # Build Storybook static
```

---

## Next Steps

1. ✅ Customize URLs in files (see Step 1 above)
2. ✅ Push to GitHub
3. ✅ Create npm token and add GitHub secret
4. ✅ Create first git tag
5. ✅ Verify workflows in Actions tab
6. ✅ Check npm and GitHub Pages

**You're ready to launch! 🚀**
