import React from 'react';
import type {FC} from 'react';

export type BadgeLevelImageProps = {
	level: string;
	title: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const BadgeLevelImage: FC<BadgeLevelImageProps> = ({level, title}) => (
	<img src={level} alt={title} />
);

export {BadgeLevelImage};
