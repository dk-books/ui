import React from 'react';
import type {FC, ReactNode} from 'react';
import {Icons} from '../icons';
import {dklBtn} from '../../../utility/themes/dkl/theme';
import {efeBtn, fontColor} from '../../../utility/themes/efe/theme';
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
	type?: 'button' | 'submit' | 'reset';
	fontColorText?: string;
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
	type,
	fontColorText,
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
				return `${dklBtn[type]} ${dklBtn[colour]} `;
			case 'efe':
				return `${efeBtn[type]} ${efeBtn[colour]}`;
			default:
				return 'py-3 px-6 mx-auto text-center';
		}
	};

	// Repo Button width
	const buttonwidth = (size: string | undefined) => {
		const width = size === 'four_column' ? 'lg:w243 lg:h49 mobile:w240 mobile:h49 w-full' : 'lg:w243 lg:h49 sm:w240 sm:h49 md:w-185 md:h-49 lg:w-315 lg:h49';
		switch (buttonType) {
			case 'promo':
				return 'md:w-128 md:h-43';
			default:
				return width;
		}
	};

	const ctas: ReactNode[] = [];

	const buttonHref = (href: string | undefined, text?: string, type?: 'button' | 'submit' | 'reset', classnames?: string) => {
		let buttonType;
		const classNameList = classnames ? `button button-dark ${classnames}` : 'button button-dark';

		if (type) {
			buttonType = onClick ? <button className={classNameList} onClick={onClick} type={type}>{children}</button> : <button className={classNameList} type={type}>{children}</button>;
		} else {
			buttonType = <a href={href} onClick={() => {
				googleAnalyticsTracking(text, category);
			}
			} aria-controls={ariaControls} target={newTab}>
				{children}
			</a>;
		}

		return buttonType;
	};

	const pathOnly = (path: string | undefined, externalLink?: boolean) => {
		if (path) {
			return (<div className='flex'>
				<a href={path} rel='noreferrer' target={externalLink ? '_blank' : ''} className={'block pl-5 py-2 pr-12 whitespace-nowrap text-14 grayscale-700 any-hover:hover:text-black any-hover:hover:underline cursor-pointer'}>
					{children}
				</a>
			</div>);
		}

		return <div>{children}</div>;
	};

	const buttonWidth = buttonwidth(layout);

	let buttonClass = null;
	if (colour) {
		const pickFontColor = fontColorText ? fontColorText : 'white';
		buttonClass = `${fontColor[pickFontColor]} ${buttonWidth}`;
	}

	let divAdd: string;
	if (dropdown) {
		const iconDisplay = icon ? <div><Icons icon={icon} /></div> : null;
		divAdd = 'h-full';
		ctas.push(
			<button
				onClick={onClick}
				className={`items-center justify-center flex flex-grow h-full items-center px-4.5 grayscale-700
      any-hover:hover:text-black font-medium`}>
				{iconDisplay}
				{children}
				<img
					className={`w-2.5 ml-3 transform any-hover:group-hover:rotate-180
        transition-transform`}
					src='/svgs/arrow-down.svg'
					alt='expand'
				/>
			</button>,
		);
	} else {
		const backButtonStyle = path ? '' : buttonRepo(repo, 'button', colour);
		ctas.push(
			<>
				<div className={`flex	${backButtonStyle} ${classnames!}	${buttonClass!}`}>
					{icon && dropdown ? (<div className='items-center justify-center pl-5 pr-2'><Icons icon={icon} /></div>) : null}
					{icon && !dropdown ? (<div className='items-center justify-center pr-2'><Icons icon={icon} /></div>) : null}
					{((href ?? type) && children) ? <div className='mx-auto h-full w-full text-ellipsis whitespace-nowrap overflow-hidden flex items-center'>{buttonHref(href, text, type, classnames)}</div> : null}
					{path ? <>{pathOnly(path, externalLink)}</> : null}
					{!path && !href && !type ? <>{children}</> : null}
				</div>
			</>,
		);
	}

	return (
		<>
			{ctas.map((node: ReactNode, i: number) => (
				<div key={i} className={divAdd}>{node}</div>
			))}
		</>
	);
};

export {Button};
