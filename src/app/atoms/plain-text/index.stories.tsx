import React from 'react';
import type {Story} from '@storybook/react';
import {PlainText} from '.';

export default {
	title: 'DK/Atom/PlainText',
	id: 'plain-text',
	component: PlainText,
};

const Template: Story<React.ComponentProps<typeof PlainText>> = args => <PlainText {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'This is a PlainText component',
};
