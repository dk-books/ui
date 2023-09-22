import React from 'react';
import type {Story} from '@storybook/react';
import {ButtonAndDropdown} from '.';

export default {
	title: 'DK/Atom/ButtonAndDropdown',
	id: 'button-and-dropdown',
	component: ButtonAndDropdown,
};

const Template: Story<React.ComponentProps<typeof ButtonAndDropdown>> = args => <ButtonAndDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
	button: 'button',
	children: 'This is a ButtonAndDropdown component',
};
