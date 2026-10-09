# Pre-Launch Checklist

Before publishing to npm and GitHub Pages, complete this checklist:

## GitHub Setup

- [ ] Repository is public
- [ ] Repository description is set
- [ ] Topics added: `design-system`, `react`, `storybook`
- [ ] GitHub Pages enabled (Settings → Pages)
- [ ] GitHub Pages source: `gh-pages` branch
- [ ] GitHub Actions permissions set to "Read and write" (Settings → Actions → General)

## npm Setup

- [ ] npm account created
- [ ] npm token generated (Automation type)
- [ ] NPM_TOKEN secret added to GitHub (Settings → Secrets and variables → Actions)

## Package Configuration

Update `package.json`:
- [ ] `repository.url` points to your GitHub repo
- [ ] `homepage` points to your GitHub Pages URL
- [ ] `author.name` is set
- [ ] `author.email` is set
- [ ] `license` is MIT (or your choice)

Update `README.md`:
- [ ] Replace `yourusername` with your GitHub username (appears 4 times)
- [ ] Package installation instructions are correct
- [ ] Links point to correct URLs

Update `CONTRIBUTING.md`:
- [ ] Fork URL is correct
- [ ] Instructions match your workflow

## Code Quality

- [ ] Run `npm run lint` - no errors
- [ ] Run `npm run storybook` - works correctly
- [ ] All components have stories
- [ ] TypeScript types are exported
- [ ] No credentials in code

## Documentation

- [ ] README.md is complete
- [ ] CONTRIBUTING.md is complete
- [ ] DEPLOYMENT.md is reviewed
- [ ] Component storybook stories have descriptions

## Git Setup

- [ ] Initial commit: `git add . && git commit -m "initial commit"`
- [ ] Push to GitHub: `git push origin main`
- [ ] Verify workflows in Actions tab

## First Publish

- [ ] Bump version: `npm version patch`
- [ ] Create tag: `git tag v0.1.0`
- [ ] Push tags: `git push origin main && git push origin v0.1.0`
- [ ] Monitor Actions tab for build/publish
- [ ] Verify package on npm: https://www.npmjs.com/package/@capital/ui
- [ ] Verify Storybook on GitHub Pages

## Post-Launch

- [ ] Test installing from npm: `npm install @capital/ui`
- [ ] Test importing in another project
- [ ] Add badges to README (optional)
- [ ] Share with team

---

## Useful Commands

```bash
# View version
npm version

# Bump version
npm version patch    # 0.1.0 → 0.1.1
npm version minor    # 0.1.0 → 0.2.0
npm version major    # 0.1.0 → 1.0.0

# Build locally
npm run build
npm run build-storybook

# Test package locally
npm pack  # Creates @capital-ui-0.1.0.tgz

# Push changes
git push origin main
git push origin --tags
```

---

## Badges for README

Add these badges to your README for credibility:

```markdown
[![npm version](https://badge.fury.io/js/@capital%2Fui.svg)](https://www.npmjs.com/package/@capital/ui)
[![npm downloads](https://img.shields.io/npm/dm/@capital/ui.svg)](https://www.npmjs.com/package/@capital/ui)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Storybook](https://img.shields.io/badge/Storybook-View%20Docs-FF69B4)](https://yourusername.github.io/capital-design-system)
```

---

**Ready to launch?** Follow the checklist above, then create your first GitHub Pages deployment! 🚀
