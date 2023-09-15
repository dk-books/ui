module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'xo',
	],
	overrides: [
		{
			extends: [
				'xo-typescript',
			],
			files: [
				'*.js',
				'*.ts',
				'*.tsx',
			],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	ignorePatterns: ['dist', '.eslintrc.js'],
	plugins: [
		'react',
	],
	rules: {
		'react/no-unescaped-entities': 'off',
    '@next/next/no-page-custom-font': 'off',
		// '@typescript-eslint/no-explicit-any': 'off',
		// 'linebreak-style': 0,
		// 'multiline-ternary': ['error', 'never'],
		// 'camelcase': 'off',
		// '@typescript-eslint/no-unsafe-call': 'off',
		// 'react/no-unescaped-entities': 'off',
	},
};
