import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  "framework": "@storybook/react-vite",
  "viteFinal": async (config, { configType }) => {
    // For GitHub Pages deployment, add the repository name as base path
    // Remove this if deploying to a custom domain or root of GitHub Pages
    if (configType === 'PRODUCTION') {
      config.base = '/capital-design-system/';
    }
    return config;
  }
};
export default config;