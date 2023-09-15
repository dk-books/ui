<<<<<<< HEAD
import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
		"../src/**/*.mdx",
		"../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
	],
=======
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
>>>>>>> d61a5ac658ef921cdab19fff88231e40f2e4b3f7
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
<<<<<<< HEAD
		{
      name: '@storybook/addon-styling',
      options: {
        // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
        // For more details on this addon's options.
        postCss: {
          implementation: require.resolve('postcss'),
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
=======
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
>>>>>>> d61a5ac658ef921cdab19fff88231e40f2e4b3f7
  docs: {
    autodocs: "tag",
  },
};
<<<<<<< HEAD
export default config;
=======
export default config;
>>>>>>> d61a5ac658ef921cdab19fff88231e40f2e4b3f7
