import React from 'react';
import type {ComponentStory, ComponentMeta} from '@storybook/react';
import {Loader} from '.';

const StoryType: ComponentMeta<typeof Loader> = {
	title: 'DK/Atom/Loader',
	component: Loader,
};
export default StoryType;

const Template: ComponentStory<typeof Loader> = args => (
	<>
		<Loader />
	</>
);

export const Main = Template.bind({});
