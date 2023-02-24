import React from 'react';
import DOMPurify from 'dompurify';

export type CreateMarkupProps = {
	children: string;
};

export const CreateMarkup: React.FC<CreateMarkupProps> = ({children, ...props}: CreateMarkupProps) => (
	<div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(children)}}/>
);
