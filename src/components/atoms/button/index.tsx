import React from 'react';
import type {FC, ReactNode} from 'react';
import {Icons} from '../icons';
import {fontColor} from '../../../utility/themes/themes';
import {dklBtn} from '../../../utility/themes/dkl/theme';
import {efeBtn} from '../../../utility/themes/efe/theme';
import * as ga from '../../../utility/ga';

type ButtonProps = {
	repo?: string;
	href?: string;
	children: ReactNode;
	icon?: string;
	wide?: boolean;
	externalLink?: boolean;
	width?: string;
	newTab?: string;
	onClick?: () => void;
	ariaControls?: string;
	classnames?: string;
	colour?: string;
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
	repo = 'default',
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
	/** GA tracking */
	const googleAnalyticsTracking = (item?: string, category?: string | undefined) => {
		ga.event({
			action: 'Click',
			category: {category},
			label: item,
		});
	};

	// Repo Button Type
	const buttonRepo = (repo: string, type: string, colour: string) => {
		switch (repo) {
			case 'dklearning':
				return `${dklBtn[type]} ${dklBtn[colour]}`;
			case 'efe':
				return `${efeBtn[type]} ${efeBtn[colour]}`;
			default:
				return 'py-3 px-6 mx-auto text-center';
		}
	};

	// Repo Button width
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

	// Icon with text href
	if (text && href) {
		const buttonWidth = buttonwidth(layout);
		let buttonClass = null;

		if (colour) {
			const pickFontColor = 'white';
			buttonClass = `${efeBtn.default} ${fontColor[pickFontColor]} ${buttonWidth}`;
		}

		return (
			<div className={`
				${buttonRepo(repo, 'button', colour)}
				${buttonClass!}
				`}>
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

	// A href Path only
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

	// Button Href
	const defaultCheck = repo === 'efe' ? efeBtn.default : dklBtn.default;
	const button = (
		<button className={`
		  ${buttonRepo(repo, 'button', colour)}
			${classnames!}
			${defaultCheck}
			${wide ? 'w-full' : 'md:auto'}
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
