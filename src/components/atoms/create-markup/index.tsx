import React from 'react';

export type CreateMarkupProps = {
	children: string;
};

export const CreateMarkup: React.FC<CreateMarkupProps> = ({children, ...props}: CreateMarkupProps) => {
	const createMarkup = () => (
		{__html: children}
	);

	return (
		<div dangerouslySetInnerHTML={createMarkup()} />
	);
};
