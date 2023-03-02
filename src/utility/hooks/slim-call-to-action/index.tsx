import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
			<div><Link href={href}>
				<div className='relative w-full h-[91px]' key={href}>
					<Image src={imageUrl} alt={'image'} layout='fill' objectFit='contain' />
				</div>
			</Link>
			</div>,
		);
	}

	if (button) {
		ctas.push(
			<Button
				repo={repo}
				wide={true}
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
