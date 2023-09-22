import React from 'react';
import type {Story} from '@storybook/react';
import LinksDropdown from '.';

export default {
	title: 'DK/Atom/LinksDropdown',
	id: 'links-dropdown',
	component: LinksDropdown,
};

const Template: Story<React.ComponentProps<typeof LinksDropdown>> = args => <LinksDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
	enabled: true,
	button: 'Button',
	links: [
		{
			title: 'Čeština',
			path: '/cz',
		},
		{
			title: 'Deutsch',
			path: '/de',
		},
		{
			title: '中文',
			path: '/cn',
		},
		{
			title: 'Eesti keeles',
			path: '/ee',
		},
		{
			title: 'English',
			path: '/en',
		},
		{
			title: 'Español',
			path: '/es',
		},
		{
			title: 'Français',
			path: '/fr',
		},
		{
			title: 'Italiano',
			path: '/it',
		},
		{
			title: '日本語',
			path: '/jp',
		},
		{
			title: 'العربية',
			path: '/ar',
		},
		{
			title: 'हिन्दी',
			path: '/hi',
		},
		{
			title: 'Polski',
			path: '/pl',
		},
		{
			title: 'Português',
			path: '/pt',
		},
		{
			title: 'Русский',
			path: '/ru',
		},
		{
			title: 'Svenska',
			path: '/sv',
		},
		{
			title: '简体中文',
			path: '/hu',
		},
	],
};
