import React from 'react';
import type {FC} from 'react';
import {CallToAction} from '../../../utility/hooks/call-to-action';
import {SlimCallToAction} from '../../../utility/hooks/slim-call-to-action';

type ContentBlockProps = {
	repo?: string;
	type: string;
	ctaType: string;
	button?: {
		text?: string;
		colour?: string;
		icon?: string;
	};
	text: string;
	onClick: () => void;
	href: string;
	imageSrc?: string;
	title: string;
	alignContents?: 'left' | 'center';
	externalLink?: boolean;
};

const ContentBlock: FC<ContentBlockProps> = ({
	repo = 'default',
	type,
	button,
	ctaType,
	text,
	onClick,
	href,
	imageSrc,
	title,
	alignContents,
	externalLink,
}) => {
	if (type === 'Cta') {
		const advert = ctaType === 'advert' ? true : null;
		if (text) {
			return <CallToAction
				repo={repo}
				onClick={onClick}
				href={href}
				imageUrl={imageSrc}
				title={title}
				advert={advert as boolean}
				text={text}
				button={button}
				alignContents={alignContents}
				externalLink={externalLink}
			/>;
		}

		return (
			<div className='sm:w-[270px] mx-auto md:w-[283px] shadow-xs relative md:mx-2.5 rounded-xl p-5 mb-5'>
				<SlimCallToAction
					repo={repo}
					onClick={onClick}
					href={href}
					imageUrl={imageSrc}
					button={button}
					externalLink={externalLink}
				/>
			</div>
		);
	}

	return <></>;
};

export {ContentBlock};
