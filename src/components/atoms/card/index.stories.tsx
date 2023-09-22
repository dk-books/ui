import React from 'react';
import type {Story} from '@storybook/react';
import {Card} from '.';

export default {
	title: 'DK/Atom/Card',
	id: 'card',
	component: Card,
};

const Template: Story<React.ComponentProps<typeof Card>> = args => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: 'This is a Card component',
	image: '/images/efe-fallback.jpg',
	text: 'This is a description of the card. It has some description text in it',
};
