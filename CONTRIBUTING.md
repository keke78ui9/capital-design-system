# Contributing to Capital Design System

Thank you for your interest in contributing! Here's how you can help:

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/yourusername/capital-design-system.git`
3. Create a branch: `git checkout -b feature/your-feature-name`
4. Install dependencies: `npm install`
5. Start Storybook: `npm run storybook`

## Development Workflow

1. **Make your changes** in the `src/` directory
2. **Add/update stories** in `.stories.tsx` files
3. **Run linting**: `npm run lint`
4. **Test in Storybook**: `npm run storybook`
5. **Commit**: `git commit -m "feat: description"`
6. **Push**: `git push origin feature/your-feature-name`
7. **Create a Pull Request** on GitHub

## Component Guidelines

### Structure
Each component should follow this structure:

```
src/components/ComponentName/
├── ComponentName.tsx      # Component implementation
├── ComponentName.css      # Component styles
└── ComponentName.stories.tsx # Storybook stories
```

### TypeScript
- Always export TypeScript interfaces/types
- Use proper prop types (avoid `any`)
- Include JSDoc comments for complex components

### Styling
- Use CSS modules or scoped CSS
- Follow the design tokens in `src/tokens/tokens.css`
- Keep styles close to components

### Stories
- Write comprehensive Storybook stories
- Include all component variants
- Add interactive controls using Storybook argTypes

## Commit Messages

Follow conventional commits:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation
- `style:` for styling changes
- `refactor:` for code refactoring
- `test:` for tests
- `chore:` for build/tooling changes

Example: `feat: add Card component with shadow variants`

## Release Process

1. Update version in `package.json`
2. Update `CHANGELOG.md` (if you have one)
3. Commit: `git commit -m "chore: release v0.2.0"`
4. Tag: `git tag v0.2.0`
5. Push: `git push origin main && git push origin v0.2.0`
6. GitHub Actions will automatically publish to npm and GitHub Pages

## Code Style

- Use Oxlint for linting: `npm run lint`
- Follow the existing code style
- Use meaningful variable names
- Write comments for complex logic

## Questions?

Feel free to open an issue or discussion if you have questions!

---

Thank you for contributing to Capital Design System! 🎨
