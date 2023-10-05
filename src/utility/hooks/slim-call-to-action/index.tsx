import React from 'react';
import Link from 'next/link';
import {Button} from '../../../components/atoms/button';
import type {FC, ReactNode} from 'react';

type SlimCallToActionProps = {
	repo?: string;
	imageUrl?: string;
	href: string;
	onClick: () => void;
	button?: {
		colour?: string;
		icon?: string;
		text?: string;
		layout?: string;
	};
	externalLink?: boolean;
	wide?: boolean;
};

const SlimCallToAction: FC<SlimCallToActionProps> = ({
	repo = 'default',
	onClick,
	imageUrl,
	href,
	button,
	externalLink,
	wide,
}) => {
	const ctas: ReactNode[] = [];

	if (imageUrl && href) {
		ctas.push(
			<div><Link href={href}>
				<div key={href}>
					<img src={imageUrl} alt={'image'} />
				</div>
			</Link>
			</div>,
		);
	}

	if (button) {
		ctas.push(
			<Button
				repo={repo}
				wide={wide ? wide : false}
				colour={button.colour}
				href={href}
				icon={button.icon}
				externalLink={externalLink}
				layout={button?.layout}
			>
				{button.text}
			</Button>,
		);
	}

	return (
		<div
			onClick={onClick}
			className='relative text-center'>
			{ctas.map((node: ReactNode, i: number) => (
				<div key={i}>{node}</div>
			))}
		</div>
	);
};

export {SlimCallToAction};
