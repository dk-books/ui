import React, {useState, useEffect} from 'react';
import type {FC, ReactNode} from 'react';
import {FiMenu} from 'react-icons/fi';

type HeaderWrapperProps = {
	children: ReactNode;
	branding: ReactNode;
	mobileNav: ReactNode;
	mobileNavEnabled?: boolean;
	sticky?: boolean;
	onMouseEnter?: () => void;
	onPointerEnter?: () => void;
};

const HeaderWrapper: FC<HeaderWrapperProps> = ({
	children,
	branding,
	mobileNav,
	mobileNavEnabled = true,
	sticky = true,
	onMouseEnter,
	onPointerEnter,
}) => {
	const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

	useEffect(() => {
		if (!mobileNavEnabled) {
			setMobileNavOpen(mobileNavEnabled);
		}
	}, [mobileNavEnabled]);

	return (
		<header
			onMouseEnter={() => {
				onMouseEnter?.();
			}}
			onPointerEnter={() => {
				onPointerEnter?.();
			}}
			className={`
				${sticky ? 'sticky top-0' : ''}
				w-full sm:shadow-md md:shadow-md lg:shadow-sm
				md:mr-10 bg-grayscale-100 flex z-30 h-17.75`}>
			{branding}
			<div className='flex-grow'></div>
			{children}
			<nav className={`
				${(mobileNavEnabled && mobileNavOpen) ? 'opacity-100 rotateX-0 visible' : 'invisible opacity-30 rotateX-90'}
				absolute w-full top-full lg:hidden left-0 shadow-md z-10 bg-grayscale-100
				transform origin-top transition
			`}>
				{mobileNav}
			</nav>
			<button
				name='Open menu'
				onMouseDown={() => {
					setMobileNavOpen(!mobileNavOpen);
				}}
				className='p-[10px] w-[40px] h-[40px] border-2 border-grayscale-500 border-solid rounded-lg relative top-[16px] right-[10px] lg:hidden focus:outline-none mobile-click-clear'>
				<FiMenu />
			</button>
		</header>
	);
};

export {HeaderWrapper};
