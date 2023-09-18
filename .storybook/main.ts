import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
		"../src/**/*.mdx",
		"../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
	],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
		{
      name: '@storybook/addon-styling',
      options: {
        sass: {
          // Require your Sass preprocessor here
          implementation: require('sass'),
        },
      },
    },
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
	staticDirs: [
		'../public',
		'../images',
		'../public/assets',
		'../public/images',
		'../src/stories/assets',
	],
  docs: {
    autodocs: "tag",
  },
};
export default config;
