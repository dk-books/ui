import React from 'react';
import {Icons} from '.';
import type {Story} from '@storybook/react';

export default {title: 'DK/Atom/Icons', component: Icons};

const Template: Story<React.ComponentProps<typeof Icons>> = args => <Icons {...args} />;

export const publicImages = Template.bind({});
publicImages.args = {
	icon: 'book',
};

publicImages.parameters = {design: {type: 'figma', url: 'https://www.figma.com/file/5Luoo8FHwMRsF3tJhGyHsA/EFE?node-id=0%3A6843'}};

export const hero = Template.bind({});
hero.args = {
	icon: 'computer',
};

hero.parameters = {design: {type: 'figma', url: 'https://www.figma.com/file/5Luoo8FHwMRsF3tJhGyHsA/EFE?node-id=0%3A6843'}};

export const exteral = Template.bind({});
exteral.args = {
	url: 'https://media.graphassets.com/Ga6W3iCCReG3TQDocMTP',
	width: 84,
	height: 58,
	description: 'icon',
};

exteral.parameters = {design: {type: 'figma', url: 'https://www.figma.com/file/5Luoo8FHwMRsF3tJhGyHsA/EFE?node-id=0%3A6843'}};
