import React from 'react';
import {ContentBlock} from '.';
import type {Story} from '@storybook/react';

export default {title: 'DK/Sections/ContentBlock', component: ContentBlock};

const Template: Story<React.ComponentProps<typeof ContentBlock>> = args => <ContentBlock {...args} />;

export const ctaText = Template.bind({});
ctaText.args = {
	type: 'Cta',
	buttonText: 'Get the audio',
	buttonColour: 'orange',
	buttonicon: 'download',
	ctaType: '',
	text: 'Teach yourself English from beginner to advanced with a range of course and practice books. Includes general English, business English and a grammar guide.',
	href: '/en/audio',
	title: 'High-quality audio',
	externalLink: false,
};

ctaText.parameters = {design: {type: 'figma', url: 'https://www.figma.com/file/5Luoo8FHwMRsF3tJhGyHsA/EFE?node-id=0%3A6843'}};

export const ctaHtml = Template.bind({});
ctaHtml.args = {
	type: 'Cta',
	buttonText: 'Buy the books',
	buttonColour: 'red',
	buttonicon: 'book',
	ctaType: 'cta',
	text: 'Teach yourself English from beginner to advanced with a range of course and practice books. Includes general English, business English and a grammar guide.',
	href: '/en/buy-books',
	imageSrc: 'https://media.graphassets.com/BlzSxAlQi6rc94jHoOQl',
	title: 'Course & practice books',
	externalLink: false,
};

ctaHtml.parameters = {design: {type: 'figma', url: 'https://www.figma.com/file/5Luoo8FHwMRsF3tJhGyHsA/EFE?node-id=0%3A6843'}};

export const ctaSlim = Template.bind({});
ctaSlim.args = {
	type: 'Cta',
	buttonText: 'Get the audio',
	buttonColour: 'teal',
	buttonicon: 'book',
	ctaType: 'cta',
	href: '/en/buy-books',
	imageSrc: 'https://media.graphassets.com/BlzSxAlQi6rc94jHoOQl',
	externalLink: false,
};

ctaSlim.parameters = {design: {type: 'figma', url: 'https://www.figma.com/file/5Luoo8FHwMRsF3tJhGyHsA/EFE?node-id=0%3A6843'}};

