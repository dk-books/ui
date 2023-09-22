import React from 'react';
import type {ComponentStory, ComponentMeta} from '@storybook/react';
import {BadgeLevelImage} from '.';

const StoryType: ComponentMeta<typeof BadgeLevelImage> = {
	title: 'DK/Atom/BadgeLevelImage',
	component: BadgeLevelImage,
};
export default StoryType;

const Template: ComponentStory<typeof BadgeLevelImage> = args => (<BadgeLevelImage {...args} />);
export const Main = Template.bind({});
Main.args = {
	level: './assets/svgs/sample.svg',
	title: 'badge level',
};
