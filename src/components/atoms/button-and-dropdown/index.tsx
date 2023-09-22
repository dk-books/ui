import React, {useState} from 'react';
import type {FC, ReactNode} from 'react';
import {Dropdown} from '../dropdown';

type ButtonAndDropdownProps = {
	children: ReactNode;
	enabled?: boolean;
	button: ReactNode;
	type?: 'hover' | 'click' | 'click-hover';
};

const ButtonAndDropdown: FC<ButtonAndDropdownProps> = ({
	enabled = true,
	children,
	button,
}) => {
	const [hoveredOpen, setHoveredOpen] = useState<boolean>(false);
	const [clickedOpen, setClickedOpen] = useState<boolean>(false);

	return (
		<div
			onMouseEnter={() => {
				setHoveredOpen(true);
			}}
			onMouseLeave={() => {
				setHoveredOpen(false);
				setClickedOpen(false);
			}}
			onClick={() => {
				setHoveredOpen(false);
				setClickedOpen(!clickedOpen);
			}}
			className='group h-full relative'>
			{button}
			<Dropdown open={enabled && (hoveredOpen || clickedOpen)}>
				{children}
			</Dropdown>
		</div>
	);
};

export {ButtonAndDropdown};

