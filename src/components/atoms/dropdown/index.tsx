import React from 'react';
import type {FC, ReactNode} from 'react';

type DropdownProps = {
	open: boolean;
	children?: ReactNode;
};

const Dropdown: FC<DropdownProps> = ({
	open,
	children,
}) => (
	<div className={`
	-translate-x-2/4 pt-2.5 absolute top-full left-1/2 bg-hero bg-heroa ${open ? 'visible' : 'invisible'}
		`}>
		<div className={`
			before:bg-triangle
			before:bg-center
			before:clear-both
			before:relative
			before:block
			before:content-['']
			before:w-[22px]
			before:h-[12px]
			before:bg-[length:22px]
			before:-translate-x-2/4
			before:top-[-11px]
			before:left-[50%]
			box-content border rounded-xl border-grayscale-light shadow-xl bg-grayscale-100
			text-grayscale-900 origin-top transition delay-100
			${open ? 'rotateX-0' : 'rotateX-90'}
			`}>
			{children}
		</div>
	</div>
);

export {Dropdown};
