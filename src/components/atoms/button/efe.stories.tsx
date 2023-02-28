import React from 'react';
import type {ComponentStory, ComponentMeta} from '@storybook/react';
import {FaBeer} from 'react-icons/fa';
import {Button} from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const StoryType: ComponentMeta<typeof Button> = {
	title: 'DK/Atom/Button/EFE',
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
	},
};
export default StoryType;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = args => (
	<div className='w-full'>
		<Button {...args}>
			{args.children}
		</Button>
	</div>
);

export const WithIcon = Template.bind({});
WithIcon.args = {
	repo: 'efe',
	children: 'Example Button',
	colour: 'default',
	icon: 'computer',
};

WithIcon.story = {
	parameters: {
		nextRouter: {
			path: '/2',
			asPath: '/1',
			query: {
			},
		},
	},
};

export const EfeWithoutIcon = Template.bind({});
EfeWithoutIcon.args = {
	repo: 'efe',
	children: 'EFE Button',
	colour: 'green',
};

EfeWithoutIcon.story = {
	parameters: {
		nextRouter: {
			path: '/',
			asPath: '/',
			query: {
			},
		},
	},
};

export const Textonly = Template.bind({});
Textonly.args = {
	repo: 'efe',
	text: 'example Text',
	href: '/books',
	newTab: 'true',
};

Textonly.story = {
	parameters: {
		nextRouter: {
			path: '/',
			asPath: '/',
			query: {
			},
		},
	},
};

export const TextIcon = Template.bind({});
TextIcon.args = {
	repo: 'efe',
	text: 'example Text & Icon',
	href: '/books',
	newTab: 'true',
	color: 'blue',
	icon: 'computer',
};

TextIcon.story = {
	parameters: {
		nextRouter: {
			path: '/',
			asPath: '/',
			query: {
			},
		},
	},
};

export const LinkWithIcon = Template.bind({});
LinkWithIcon.args = {
	repo: 'efe',
	children: 'Example Link with Text & Icon',
	path: '/books',
	icon: 'computer',
};

LinkWithIcon.story = {
	parameters: {
		nextRouter: {
			path: '/',
			asPath: '/',
			query: {
			},
		},
	},
};
