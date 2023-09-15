import React from 'react';
import type {Story} from '@storybook/react';

import {InputField} from '.';

export default {
	title: 'DK/Form/Input field',
	id: 'input-field',
	component: InputField,
};

const Template: Story<React.ComponentProps<typeof InputField>> = args => <InputField {...args} />;

export const InputWithName = Template.bind({});
InputWithName.args = {
	input: {name: 'inputTitle'},
	children: 'Title',
	placeholder: 'Type something here',
};

InputWithName.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/5Luoo8FHwMRsF3tJhGyHsA/EFE?node-id=0%3A6843',
	},
};

export const InputWithNameError = Template.bind({});
InputWithNameError.args = {
	input: {name: 'inputTitle'},
	children: 'Title',
	placeholder: 'Type something here',
	error: 'Please correct the error',
};

InputWithName.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/5Luoo8FHwMRsF3tJhGyHsA/EFE?node-id=0%3A6843',
	},
};

export const InputWithDotBorder = Template.bind({});
InputWithDotBorder.args = {
	input: {name: 'inputDot'},
	placeholder: 'Type something here',
	classname: 'border-dashed border-2 border-grayscale-900',
};

InputWithDotBorder.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/5Luoo8FHwMRsF3tJhGyHsA/EFE?node-id=0%3A6843',
	},
};
