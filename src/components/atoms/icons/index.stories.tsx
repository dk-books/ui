import React from 'react';
import {Icons} from '.';
import type {Story} from '@storybook/react';

export default {title: 'DK/Atom/Icons', component: Icons};

const Template: Story<React.ComponentProps<typeof Icons>> = args => <Icons {...args} />;

export const PublicImages = Template.bind({});
PublicImages.args = {
	icon: './images/headphones-blue.jpg',
};

PublicImages.parameters = {design: {type: 'figma', url: 'https://www.figma.com/file/5Luoo8FHwMRsF3tJhGyHsA/EFE?node-id=0%3A6843'}};

export const Hero = Template.bind({});
Hero.args = {
	icon: 'computer',
};

Hero.parsameters = {design: {type: 'figma', url: 'https://www.figma.com/file/5Luoo8FHwMRsF3tJhGyHsA/EFE?node-id=0%3A6843'}};

export const Exteral = Template.bind({});
Exteral.args = {
	url: 'https://media.graphassets.com/Ga6W3iCCReG3TQDocMTP',
	width: 84,
	height: 58,
	description: 'icon',
};

Exteral.parameters = {design: {type: 'figma', url: 'https://www.figma.com/file/5Luoo8FHwMRsF3tJhGyHsA/EFE?node-id=0%3A6843'}};
