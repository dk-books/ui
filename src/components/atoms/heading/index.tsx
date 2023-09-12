import React from 'react';

enum HeadingLevel {
	H1 = 'h1',
	H2 = 'h2',
	H3 = 'h3',
	H4 = 'h4',
}

type HeadingProps = {
	level: HeadingLevel;
	children: string;
};

const Heading = ({level, children}: HeadingProps) => {
	const HeadingName = level;
	return <HeadingName>{children}</HeadingName>;
};

export {Heading, HeadingLevel};
