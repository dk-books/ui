import React from 'react';
import type {Story} from '@storybook/react';

import {Checkbox} from '.';

export default {
	title: 'DK/Form/Checkbox',
	id: 'checkbox',
	component: Checkbox,
};

const Template: Story<React.ComponentProps<typeof Checkbox>> = args => <Checkbox {...args} />;

export const Checkbox1 = Template.bind({});
Checkbox1.args = {
	children: 'Sign up to the newsletter for product updates',
};

Checkbox1.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/5Luoo8FHwMRsF3tJhGyHsA/EFE?node-id=0%3A6843',
	},
};

export const Checkbox5 = Template.bind({});
Checkbox5.args = {
	children: 'Sign up to the newsletter for product updates',
	error: 'Please correct the error',
};

Checkbox5.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/5Luoo8FHwMRsF3tJhGyHsA/EFE?node-id=0%3A6843',
	},
};

export const Checkbox6 = Template.bind({});
Checkbox6.args = {
	children: 'Sign up to the newsletter for product updates',
	dotted: true,
	defaultChecked: true,
};

Checkbox6.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/5Luoo8FHwMRsF3tJhGyHsA/EFE?node-id=0%3A6843',
	},
};

