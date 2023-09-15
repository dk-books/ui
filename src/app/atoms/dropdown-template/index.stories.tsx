import React from 'react';
import type {ComponentStory, ComponentMeta} from '@storybook/react';
import {DropdownTemplate} from '.';

const StoryType: ComponentMeta<typeof DropdownTemplate> = {
	title: 'DK/Form/DropdownTemplate',
	component: DropdownTemplate,
};
export default StoryType;

const Template: ComponentStory<typeof DropdownTemplate> = args => (
	<DropdownTemplate {...args}>{args.children}</DropdownTemplate>
);

export const ComponentData = Template.bind({});

ComponentData.args = {
	display: true,
	children: <div>Dropdown Template</div>,
};

ComponentData.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/5Luoo8FHwMRsF3tJhGyHsA/EFE?node-id=0%3A6843',
	},
};
