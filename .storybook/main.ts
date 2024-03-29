module.exports = {
  stories: [
		"../src/**/*.mdx",
		"../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
	],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "storybook-addon-next-router",
    "storybook-addon-designs",
  ],
  "staticDir": [
		'../public',
		'../images',
		'../public/assets',
		'../public/images',
		'../src/stories/assets',
		'../src/assets/svgs',
	],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}
