import React from 'react';
import {plainTextClasses, PlainTextSize} from './index.style';

export type PlainTextProps = {
	size?: PlainTextSize;
	bold?: boolean;
	children: string;
};

export const PlainText: React.FC<PlainTextProps> = ({size, bold, children}: PlainTextProps) => {
	const classes = plainTextClasses({size, bold, children});
	return <div className={classes}>{children}</div>;
};

