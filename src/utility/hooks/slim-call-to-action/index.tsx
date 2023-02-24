import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Button} from '../../../components/atoms/button';
import type {FC} from 'react';

type SlimCallToActionProps = {
	imageUrl?: string;
	href: string;
	onClick: () => void;
	button?: {
		colour?: string;
		icon?: string;
		text?: string;
	};
	externalLink?: boolean;
};

const SlimCallToAction: FC<SlimCallToActionProps> = ({
	onClick,
	imageUrl,
	href,
	button,
	externalLink,
}) => (
	<div
		onClick={onClick}
		className='relative text-center'>
		{
			imageUrl && href ? <div><Link href={href}><div className='relative w-full h-[91px]' key={href}><Image src={imageUrl} alt={'image'} layout='fill' objectFit='contain' /></div></Link></div> : null
		}
		{button ? <Button wide={true} colour={button.colour} href={href} icon={button.icon} externalLink={externalLink}>{button.text}</Button> : null}
	</div>
);

export {SlimCallToAction};
