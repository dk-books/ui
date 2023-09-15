import React from 'react';
<<<<<<< HEAD
import Link from 'next/link';
import Image from 'next/image';
import {Button} from '../../../app/atoms/button';
=======
import {Button} from '../../../components/atoms/button';
>>>>>>> d61a5ac658ef921cdab19fff88231e40f2e4b3f7
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
};

const SlimCallToAction: FC<SlimCallToActionProps> = ({
	repo = 'default',
	onClick,
	imageUrl,
	href,
	button,
	externalLink,
}) => {
	const ctas: ReactNode[] = [];

	if (imageUrl && href) {
		ctas.push(
			<div><a href={href}>
				<div className='relative w-full h-[91px]' key={href}>
					<img src={imageUrl} alt={'image'} />
				</div>
			</a>
			</div>,
		);
	}

	if (button) {
		ctas.push(
			<Button
				repo={repo}
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
