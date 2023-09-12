import React from 'react';
import type {ComponentStory, ComponentMeta} from '@storybook/react';

import {ToolTip} from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const StoryType: ComponentMeta<typeof ToolTip> = {
	title: 'DK/Atom/ToolTip',
	component: ToolTip,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
	},
};
export default StoryType;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ToolTip> = args => (
	<div className='w-full'>
		<ToolTip {...args}>
			{args.message}
		</ToolTip>
	</div>
);

export const Main = Template.bind({});

Main.args = {
	message: 'This is a tooltip',
};

