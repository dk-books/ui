import React from 'react';
import {AlertMessage} from '.';
import type {Story} from '@storybook/react';

export default {title: 'DK/Atom/AlertMessage', component: AlertMessage};

const Template: Story<React.ComponentProps<typeof AlertMessage>> = args => <AlertMessage {...args} />;

export const successMessage = Template.bind({});
successMessage.args = {successMessage: 'You have successfully saved your updated details'};
successMessage.parameters = {design: {type: 'figma', url: 'https://www.figma.com/file/5Luoo8FHwMRsF3tJhGyHsA/EFE?node-id=0%3A6843'}};

export const errorMessage = Template.bind({});
errorMessage.args = {errorMessage: 'Your update failed due to an internal error. Please try again later'};
errorMessage.parameters = {design: {type: 'figma', url: 'https://www.figma.com/file/5Luoo8FHwMRsF3tJhGyHsA/EFE?node-id=0%3A6843'}};
