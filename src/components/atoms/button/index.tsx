import React from 'react';
import type {FC, ReactNode} from 'react';
import Link from 'next/link';
import {Icons} from '../icons';
import {colors} from '../../../utility/themes/themes';
import * as ga from '../../../utility/ga';

type ButtonProps = {
	href?: string;
	colour?: string;
	children: ReactNode;
	icon?: string;
	wide?: boolean;
	externalLink?: boolean;
	width?: string;
	newTab?: string;
	onClick?: () => void;
	ariaControls?: string;
	classnames?: string;
	color?: string;
	buttonType?: string;
	layout?: string;
	tailwindClass?: string;
	category?: string;
	link?: string;
	text?: string;
	path?: string;
	dropdown?: boolean;
};

const Button: React.FC<ButtonProps> = ({
	href,
	children,
	colour = 'default',
	icon,
	wide = false,
	externalLink = false,
	text,
	newTab,
	ariaControls,
	classnames,
	buttonType,
	layout,
	category,
	path,
	dropdown,
	onClick,
}) => {
	let buttonColor = colors[colour] || colors.default;

	/** GA tracking */
	const googleAnalyticsTracking = (item?: string, category?: string | undefined) => {
		ga.event({
			action: 'Click',
			category: {category},
			label: item,
		});
	};

	if (dropdown) {
		const iconDisplay = icon ? <Icons icon={icon} /> : null;
		return (
			<button
				onClick={onClick}
				className={`flex flex-grow h-full items-center px-4.5 text-gray-450
      any-hover:hover:text-black font-medium`}>
				{iconDisplay}
				{text}
				<img
					className={`w-2.5 ml-3 transform any-hover:group-hover:rotate-180
        transition-transform`}
					src='/svgs/arrow-down.svg'
					alt='expand'
				/>
			</button>
		);
	}

	const buttonwidth = (size: string | undefined) => {
		const width = size === 'four_column' ? 'lg:w243 lg:h49 mobile:w240 mobile:h49' : 'lg:w243 lg:h49 sm:w240 sm:h49 md:w-185 md:h-49 lg:w-315 lg:h49';
		switch (buttonType) {
			case 'advert':
				return width;
			case 'promo':
				return 'md:w-128 md:h-43';
			default:
				return 'md:h-44 ' + width;
		}
	};

	if (text && href) {
		const tailwindClass = 'text-white inline-flex items-center';
		const buttonWidth = buttonwidth(layout);
		const tailwind = 'py-3 px-6 mx-auto text-center items-center rounded-lg mx-0 my-7 whitespace-nowrap';
		let buttonClass = null;

		if (colour) {
			buttonColor = buttonColor + ' ' + tailwindClass;
			buttonClass = `${buttonColor} ${buttonWidth} ${tailwind}`;
		}

		return (
			<div className={`${classnames!} ${buttonClass!}`}>
				{icon ? (<div className='items-center justify-center pr-2'><Icons icon={icon} /></div>) : null}
				<div className='mx-auto w-full'>
					<a href={href} onClick={() => {
						googleAnalyticsTracking(text, category);
					}
					} aria-controls={ariaControls} target={newTab}>
						{text}
					</a>
				</div>
			</div>
		);
	}

	if (path) {
		return (
			<div className='flex'>
				{icon ? <div className='pl-4 pt-1'><div className='relative h-7 w-7'><Icons icon={icon} /></div></div> : null}
				<a href={path}
					rel='noreferrer'
					target={externalLink ? '_blank' : ''}
					className={`
					block pl-5 py-2 pr-12 whitespace-nowrap text-14
					text-gray-450 any-hover:hover:text-black
					any-hover:hover:underline cursor-pointer`}>
					{children}
				</a>
			</div>
		);
	}

	const button = (
		<button className={`
		${classnames!}
		${buttonColor}
			${wide ? 'w-full' : 'md:auto'}
			sm:w-full flex sm:text-14 text-16 xl:text-18
    	text-white rounded-lg items-center py-3 px-6 text-lg
		`}>
			<div className='flex-grow'></div>
			{icon ? <div className='pr-2'><Icons icon={icon} /></div> : null}
			<div className='text-ellipsis whitespace-nowrap overflow-hidden'>
				{children}
			</div>
			<div className='flex-grow'></div>
		</button>
	);

	if (href) {
		return <a href={href} className={`sm:w-full ${wide ? 'w-full' : 'md:inline-block'}`} rel='noreferrer' target={externalLink ? '_blank' : ''}>
			{button}
		</a>;
	}

	return button;
};

export {Button};
