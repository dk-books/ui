import React from 'react';
import type {ComponentMeta} from '@storybook/react';
import {Backdrop} from '.';

const StoryType: ComponentMeta<typeof Backdrop> = {
	title: 'DK/Form/Backdrop',
	component: Backdrop,
};
export default StoryType;

const Template = args => (
	<Backdrop {...args}>{args.children}</Backdrop>
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
