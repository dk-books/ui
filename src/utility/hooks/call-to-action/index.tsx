import React from 'react';
import Link from 'next/link';
import {Button} from '../../../components/atoms/button';
import type {FC, ReactNode} from 'react';

type CallToActionProps = {
	repo?: string;
	imageUrl?: string;
	href: string;
	onClick: () => void;
	title: string;
	advert: boolean;
	text: string;
	button?: {
		colour?: string;
		icon?: string;
		text?: string;
		layout?: string;
	};
	alignContents?: 'left' | 'center';
	externalLink?: boolean;
};

const CallToAction: FC<CallToActionProps> = ({
	repo = 'default',
	onClick,
	imageUrl,
	href,
	title,
	text,
	advert,
	button,
	alignContents = 'center',
	externalLink,
}) => {
	function createMarkup() {
		return {__html: text};
	}

	const ctas: ReactNode[] = [];

	if (imageUrl && href) {
		ctas.push(
			<div className='px-1 m-1 relative w-full h-64'>
				<Link href={href} key={href}>
					<div><img className='mx-auto' src={imageUrl} alt={title}/></div>
				</Link>
			</div>,
		);
	}

	if (title && !advert) {
		ctas.push(
			<div className='px-1 m-1'>
				<div className='mx-auto'>
					<h3>{title}</h3>
				</div>
			</div>,
		);
	}

	if (text) {
		ctas.push(<div className='px-1 m-1 sm:text-14 xl:text-18 pb-8' dangerouslySetInnerHTML={createMarkup()}></div>);
	}

	if (button) {
		ctas.push(
			<div className={`px-1 m-1 ${text ? 'absolute bottom-0 w-full' : ''}`}>
				<Button
					repo={repo}
					colour={button.colour}
					href={href}
					icon={button.icon}
					externalLink={externalLink}
					layout={button?.layout}>
					{button.text}
				</Button>
			</div>,
		);
	}

	return (
		<div
			onClick={onClick}
			className={`relative
        ${alignContents === 'left' ? 'text-left' : 'text-center'}
        ${text && button ? 'flex flex-col mb-6 pb-20' : 'pb-8'}`}>
			{ctas.map((node: ReactNode, i: number) => (
				<div key={i}>{node}</div>
			))}
		</div>
	);
};

export {CallToAction};
