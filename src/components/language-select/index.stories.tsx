import React from 'react';
import type {ComponentStory, ComponentMeta} from '@storybook/react';
import {LanguageSelect} from '.';

const StoryType: ComponentMeta<typeof LanguageSelect> = {
	title: 'DK/Sections/LanguageSelect',
	component: LanguageSelect,
	argTypes: {
	},
};
export default StoryType;

const Template: ComponentStory<typeof LanguageSelect> = args => <LanguageSelect {...args} />;

export const Main = Template.bind({});
Main.args = {
	languages: [
		'English',
		'Deutsch',
		'Čeština',
		'中文',
		'Eesti keeles',
		'Español',
		'Français',
		'Italiano',
		'日本語',
		'Magyar',
		'Монгол',
		'Norsk',
		'Português (Brasil)',
		'Русский',
		'Română',
		'Slovenčina',
		'Slovenščina',
		'Svenska',
		'Tiếng Việt',
	],
};
