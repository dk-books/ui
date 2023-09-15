import React from 'react';
import type {ComponentStory, ComponentMeta} from '@storybook/react';
import {Badge} from '.';
import {BadgeLevelImage} from './badge-level-image';

const StoryType: ComponentMeta<typeof Badge> = {
	title: 'DK/Atom/Badge',
	component: Badge,
	argTypes: {onClick: {action: 'clicked', args: 'level'}},
};
export default StoryType;

const Template: ComponentStory<typeof Badge> = args => (
	<Badge {...args}>{args.children}</Badge>
);

export const PreLevel = Template.bind({});
PreLevel.args = {
	children: <BadgeLevelImage level='./assets/svgs/pre-level.svg' title='one' />,
	colour: 'default',
};

export const LevelOne = Template.bind({});
LevelOne.args = {
	children: <BadgeLevelImage level='./assets/svgs/level-one.svg' title='one' />,
	colour: 'orange',
};

export const LevelTwo = Template.bind({});
LevelTwo.args = {
	children: <BadgeLevelImage level='./assets/svgs/level-two.svg' title='two' />,
	colour: 'yellow',
};
export const LevelThree = Template.bind({});
LevelThree.args = {
	children: <BadgeLevelImage level='./assets/svgs/level-three.svg' title='three' />,
	colour: 'green',
};
export const LevelFour = Template.bind({});
LevelFour.args = {
	children: <BadgeLevelImage level='./assets/svgs/level-four.svg' title='four' />,
	colour: 'navy',
};
