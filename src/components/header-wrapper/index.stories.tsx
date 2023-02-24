import React from 'react';
import type {ComponentStory, ComponentMeta} from '@storybook/react';
import {Center} from '../atoms/center';
import {HeaderWrapper} from '.';

const StoryType: ComponentMeta<typeof HeaderWrapper> = {
	title: 'DK/Atom/HeaderWrapper',
	component: HeaderWrapper,
	argTypes: {
	},
};
export default StoryType;

const Template: ComponentStory<typeof HeaderWrapper> = args => (
	<>
		<HeaderWrapper {...args} />
		<div style={{height: '1000px', background: '#ccc'}}>
			<Center>
					Page Content
			</Center>
		</div>
	</>
);

export const Main = Template.bind({});
Main.args = {
	mobileNavEnabled: true,
	children: <div>children</div>,
	branding: <div>branding</div>,
	mobileNav: <div>mobile nav</div>,
};
