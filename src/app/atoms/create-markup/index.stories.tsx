import React from 'react';
import type {Story} from '@storybook/react';
import {CreateMarkup} from '.';

export default {
	title: 'DK/Atom/CreateMarkup',
	id: 'create-markup',
	component: CreateMarkup,
};

const Template: Story<React.ComponentProps<typeof CreateMarkup>> = args => <CreateMarkup {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: '<p><b>This is a CreateMarkup component</b></p>',
};
