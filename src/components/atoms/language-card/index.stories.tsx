import React from 'react';
import type {ComponentStory, ComponentMeta} from '@storybook/react';

import {LanguageCard} from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const StoryType: ComponentMeta<typeof LanguageCard> = {
	title: 'DK/Atom/LanguageCard',
	component: LanguageCard,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
	},
};
export default StoryType;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LanguageCard> = args => (
	<div className='w-40 h-16'>
		<LanguageCard {...args} />
	</div>
);

export const English = Template.bind({});
English.args = {
	language: 'English',
};

export const Deutsch = Template.bind({});
Deutsch.args = {
	language: 'Deutsch',
};

export const Czech = Template.bind({});
Czech.args = {
	language: 'Čeština',
};

/*
Export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};
*/
