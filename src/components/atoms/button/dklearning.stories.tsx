import React from 'react';
import type {ComponentStory, ComponentMeta} from '@storybook/react';
import {FaBeer} from 'react-icons/fa';
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

export const ExampleButton = Template.bind({});
ExampleButton.args = {
	repo: 'dklearning',
	children: 'Save',
	colour: 'buttonDark',
	href: '/books',
	type: 'submit',
};

ExampleButton.story = {
	parameters: {
		nextRouter: {
			path: '/',
			asPath: '/',
			query: {
			},
		},
	},
};
