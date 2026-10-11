# Publishing @capital/ui to npm

This guide walks you through publishing the Capital Design System package to npm for use by MFEs.

## Current Status ✅
- ✅ Library built with Vite (ES modules)
- ✅ TypeScript types generated
- ✅ GitHub Actions workflow configured (`publish-npm.yml`)
- ✅ Package name registered: `@capital/ui`
- ✅ Storybook deployed to GitHub Pages
- ⏳ **Ready for npm publishing**

## Pre-Publishing Checklist

### 1. Verify package.json is correct
```json
{
  "name": "@capital/ui",
  "version": "0.1.0",
  "description": "Capital design system components and tokens",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js"
    }
  },
  "files": ["dist"],
  "keywords": ["design-system", "react", "components", "ui", "storybook"],
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/capital-design-system"
  },
  "homepage": "https://yourusername.github.io/capital-design-system",
  "license": "MIT"
}
```

✅ All key fields are present and correct

### 2. Verify build output
```bash
# Build the library locally
npm run build

# Check dist folder contains:
# - dist/index.js (ES module)
# - dist/index.d.ts (TypeScript definitions)
# - dist/index.css (Styles)
```

### 3. Create src/index.ts entry point
Ensure `src/index.ts` exports all public components and tokens:

```typescript
// src/index.ts
export { Button } from './components/Button/Button';
export * from './tokens/tokens.css';
// Add other components as they're created
```

## Publishing Steps

### Step 1: Create npm Account (if needed)
- Go to https://www.npmjs.com/signup
- Create an account or log in

### Step 2: Set Up GitHub Secret for npm Token

1. **Generate npm token:**
   - Log into https://www.npmjs.com
   - Go to Account Settings → Auth Tokens
   - Create a new "Automation" token (Granular access recommended)
   - Copy the token

2. **Add to GitHub:**
   - Go to your repo → Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `NPM_TOKEN`
   - Value: Paste the npm token
   - Click "Add secret"

### Step 3: Bump Version and Create Release Tag

```bash
# Update version in package.json (e.g., from 0.1.0 to 0.1.1)
npm version patch  # or minor/major as needed

# Or manually:
# 1. Edit package.json version field
# 2. Commit: git add package.json && git commit -m "chore: bump version to 0.1.1"
# 3. Create tag and push:
git tag v0.1.1
git push origin v0.1.1
```

### Step 4: Watch Automated Publishing

- Go to your repo → Actions
- The `publish-npm.yml` workflow will automatically trigger
- Monitor the build process
- Once successful, check https://www.npmjs.com/package/@capital/ui

### Step 5: Verify Published Package

```bash
# Try installing in another project
npm install @capital/ui

# Test usage
import { Button } from '@capital/ui';
```

## Publishing Workflow Automation

The `.github/workflows/publish-npm.yml` workflow will:
1. ✅ Check out code
2. ✅ Install dependencies
3. ✅ Build the library
4. ✅ Publish to npm using the `NPM_TOKEN` secret

**Trigger:** Any git tag matching pattern `v*.*.*` (e.g., `v0.1.1`, `v1.0.0`)

## Semantic Versioning Guidelines

- **PATCH** (0.1.1): Bug fixes, minor improvements
  ```bash
  npm version patch
  ```
- **MINOR** (0.2.0): New features, backward compatible
  ```bash
  npm version minor
  ```
- **MAJOR** (1.0.0): Breaking changes
  ```bash
  npm version major
  ```

## After First Publication

1. ✅ Update README.md with installation instructions (already done)
2. ✅ Add CHANGELOG.md to track versions
3. 📝 Update MFEs to import from npm:
   ```bash
   npm install @capital/ui
   ```
   ```typescript
   import { Button } from '@capital/ui';
   ```

4. 📝 Consider adding:
   - Automated changelog generation
   - Release notes
   - Deprecation warnings for future breaking changes

## Testing Before Publishing

Recommended steps:
```bash
# 1. Build locally
npm run build

# 2. Test build output
npm pack  # Creates capital-ui-0.1.0.tgz

# 3. Install locally in test project
cd ../test-mfe
npm install ../capital-design-system/capital-ui-0.1.0.tgz

# 4. Verify imports work
# Then delete tgz file when ready
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "npm publish failed - 401 Unauthorized" | Check NPM_TOKEN is set correctly in GitHub Secrets |
| "Package version already exists" | Increment version number and try again |
| "Cannot find module" in consumer | Verify exports in package.json and src/index.ts |
| Build fails in workflow | Check npm ci completes; verify all deps in package.json |

## Next Steps for MFEs

Once published, MFEs can:

```bash
# Install the shared component library
npm install @capital/ui

# Use in components
import { Button } from '@capital/ui';

export function MyMFE() {
  return <Button>Click me</Button>;
}
```

## Quick Start Checklist

- [ ] Review package.json settings
- [ ] Build locally: `npm run build`
- [ ] Generate npm token from npmjs.com
- [ ] Add NPM_TOKEN to GitHub Secrets
- [ ] Create version tag: `git tag v0.1.0`
- [ ] Push tag: `git push origin v0.1.0`
- [ ] Monitor GitHub Actions workflow
- [ ] Verify on npmjs.com/package/@capital/ui
- [ ] Update MFE projects to use `npm install @capital/ui`
