import React from 'react';
import {HeadingLevel, Heading} from ".";

export default {
	title: "DK/Atom/Heading",
	component: Heading,
	argTypes: {
		level: {
			options: Object.keys(HeadingLevel),
			control: {type: "select"},
		},
	},
};

const Template = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
	level: HeadingLevel.H1,
	children: "This is a Heading",
};
Default.parameters = {
	design: {
		type: "zeplin",
		url: "https://app.zeplin.io/project/61efdfff87c11a4802392df8/screen/61f7c14e23dfe7108834bbea",
	},
};
