import React from 'react';
import type {ComponentStory, ComponentMeta} from '@storybook/react';
import {Button} from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const StoryType: ComponentMeta<typeof Button> = {
	title: 'DK/Atom/Button/DKLearning',
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

export const Default = Template.bind({});
Default.args = {
	repo: 'dkl',
	children: 'DKL Button',
	colour: 'default',
	type: 'submit',
};

Default.story = {
	parameters: {
		nextRouter: {
			path: '/',
			asPath: '/',
			query: {
			},
		},
	},
};

export const External = Template.bind({});
External.args = {
	repo: 'dkl',
	children: 'DKL External Button',
	colour: 'default',
	icon: 'external',
	externalLink: true,
	href: '/books',
};

External.story = {
	parameters: {
		nextRouter: {
			path: '/2',
			asPath: '/1',
			query: {
			},
		},
	},
};
