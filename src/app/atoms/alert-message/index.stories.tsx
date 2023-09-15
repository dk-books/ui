import React from 'react';
import {AlertMessage} from '.';
import type {Story} from '@storybook/react';

export default {title: 'DK/Atom/AlertMessage', component: AlertMessage};

const Template: Story<React.ComponentProps<typeof AlertMessage>> = args => <AlertMessage {...args} />;

export const SuccessMessage = Template.bind({});
SuccessMessage.args = {
	SuccessMessage: 'You have successfully saved your updated details'
};
SuccessMessage.parameters = {
	design: {type: 'figma', url: 'https://www.figma.com/file/5Luoo8FHwMRsF3tJhGyHsA/EFE?node-id=0%3A6843'}
};

export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
	ErrorMessage: 'Your update failed due to an internal error. Please try again later'
};
ErrorMessage.parameters = {
	design: {type: 'figma', url: 'https://www.figma.com/file/5Luoo8FHwMRsF3tJhGyHsA/EFE?node-id=0%3A6843'}
};