import React from 'react';
import type {ComponentStory, ComponentMeta} from '@storybook/react';
import {CopyComponent} from '.';

const StoryType: ComponentMeta<typeof CopyComponent> = {
	title: 'DK/Form/CopyComponent',
	component: CopyComponent,
};
export default StoryType;

const Template: ComponentStory<typeof CopyComponent> = args => (
	<CopyComponent {...args}>{args.children}</CopyComponent>
);

export const ComponentData = Template.bind({});

ComponentData.args = {
	children: <div>Copy component to new component</div>,
};

ComponentData.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/5Luoo8FHwMRsF3tJhGyHsA/EFE?node-id=0%3A6843',
	},
};
