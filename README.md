# Capital Design System

A modern React design system with Storybook documentation, built with Vite and TypeScript.

## Features

- 🎨 Reusable React components
- 📚 Living documentation with Storybook
- 📦 Published as npm package (`@capital/ui`)
- 🚀 Deployed to GitHub Pages
- ⚡ Built with Vite and TypeScript
- ♿ Accessibility-first approach

## Quick Start

### Development

```bash
# Install dependencies
npm install

# Start Storybook (development)
npm run storybook

# Storybook will open at http://localhost:6006
```

### Building

```bash
# Build the library
npm run build

# Build Storybook for production
npm run build-storybook

# Run linting
npm run lint
```

## Installation

Install the package from npm:

```bash
npm install @capital/ui
```

## Usage

```tsx
import { Button } from '@capital/ui';

export function App() {
  return (
    <Button 
      primary 
      size="medium" 
      label="Click me"
      onClick={() => console.log('Clicked!')}
    />
  );
}
```

## Project Structure

```
src/
├── components/        # Reusable components
│   └── Button/
│       ├── Button.tsx
│       ├── Button.css
│       └── Button.stories.tsx
├── tokens/           # Design tokens
│   └── tokens.css
└── index.ts         # Main export
```

## Publishing to npm

### One-time setup:

1. Create an npm account at [npmjs.com](https://npmjs.com) if you don't have one
2. Create an npm access token:
   - Go to https://www.npmjs.com/settings/~/tokens
   - Create a new **Automation** token
   - Copy the token

3. Add the token to GitHub Secrets:
   - Go to your repository Settings → Secrets and variables → Actions
   - Create a new repository secret named `NPM_TOKEN`
   - Paste your npm token

### Publishing a new version:

```bash
# 1. Update version in package.json
npm version patch  # or minor, major

# 2. Push to GitHub (main branch)
git push origin main

# 3. Create a git tag
git tag v0.1.0
git push origin v0.1.0

# Workflow will automatically:
# - Build the library
# - Publish to npm
```

Or manually:

```bash
npm login
npm publish --access public
```

## GitHub Pages Deployment

Storybook is automatically deployed to GitHub Pages on every push to `main`.

**Setup (one-time):**

1. Go to Repository → Settings → Pages
2. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: Select `gh-pages` branch (created by workflow)

The Storybook will be available at: `https://yourusername.github.io/capital-design-system`

## Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Build library for distribution
- `npm run build-storybook` - Build Storybook static site
- `npm run storybook` - Start Storybook development server
- `npm run preview` - Preview production build
- `npm run lint` - Run oxlint

## Adding New Components

1. Create a new folder in `src/components/`:
   ```
   src/components/Card/
   ├── Card.tsx
   ├── Card.css
   └── Card.stories.tsx
   ```

2. Export from `src/index.ts`:
   ```tsx
   export { Card } from './components/Card/Card';
   export type { CardProps } from './components/Card/Card';
   ```

3. Write your story in `Card.stories.tsx`

4. Storybook will automatically discover it!

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## Support

For issues and questions, please open an issue on GitHub.

---

**Repository:** [GitHub](https://github.com/yourusername/capital-design-system)  
**Documentation:** [Storybook](https://yourusername.github.io/capital-design-system)  
**Package:** [@capital/ui on npm](https://www.npmjs.com/package/@capital/ui)

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
