import React from 'react';
import {BasicModal} from '.';
import type {Story} from '@storybook/react';

export default {title: 'DK/Atom/BasicModal', component: BasicModal};

const Template: Story<React.ComponentProps<typeof BasicModal>> = args => <BasicModal {...args} />;

export const displayMessage = Template.bind({});
displayMessage.args = {
	repo: 'efe',
	buttonColour: 'blue',
	buttonType: 'button1',
	language: 'English',
	buttonTitle: 'Everyday English',
	displayTitle: 'Everyday English Langauge',
	displayMessage: 'Please select your language from the list below.',
	buttons: [
		{repo: 'efe', href: '/en/audio/every-day-english-uk', label: 'British English', backgroundColor: 'green', externalLink: true},
		{repo: 'efe', href: '/en/audio/every-day-english-us', label: 'American English', backgroundColor: 'red', externalLink: true},
	],
};

displayMessage.parameters = {design: {type: 'figma', url: 'https://www.figma.com/file/5Luoo8FHwMRsF3tJhGyHsA/EFE?node-id=0%3A6843'}};
