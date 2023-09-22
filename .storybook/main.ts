const path = require('path');

module.exports = {
  stories: [
		"../src/**/*.mdx",
		"../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
	],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
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
    "name": "@storybook/react-webpack5",
    "options": {}
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
		docsPage: true
  },
};
