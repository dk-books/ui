import React from 'react';
import type {FC} from 'react';

type DropdownTemplateProps = {
	display?: boolean;
	children?: JSX.Element;
};

const DropdownTemplate: FC<DropdownTemplateProps> = ({
	display,
	children,
}) => (
	<>
		<div
			className={`absolute bg-white z-20 sm:-left-5 sm:w-mobile-extra md:w-full sm:rounded-b md:rounded-b-3xl sm:border-b 
        md:border border-solid border-grayscale-dark py-5 sm:top-11 md:top-6.25 transform origin-top transition ${display ? 'opacity-100 rotateX-0 visible' : 'invisible opacity-30 rotateX-90'}`}>
			{children}
		</div>
	</>
);

export {DropdownTemplate};
