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
	href: '/books',
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
	href: '/books',
	newTab: 'true',
	children: 'Example Text',
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

	href: '/books',
	newTab: 'true',
	colour: 'red',
	icon: 'book',
	children: 'example Text & Icon',
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

export const FourColumnLink = Template.bind({});
FourColumnLink.args = {
	repo: 'efe',
	children: 'Buy from McNally Robinson',
	href: '/books',
	layout: 'four_column',
};

FourColumnLink.story = {
	parameters: {
		nextRouter: {
			path: '/',
			asPath: '/',
			query: {
			},
		},
	},
};
