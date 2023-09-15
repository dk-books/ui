import React from 'react';
import type {FC} from 'react';
<<<<<<< HEAD:src/app/atoms/icons/index.tsx
import Image from 'next/image';
=======
>>>>>>> d61a5ac658ef921cdab19fff88231e40f2e4b3f7:src/components/atoms/icons/index.tsx
import {images} from './images';

export type IconsScheme = {
	icon?: string;
	url?: string;
	width?: number;
	height?: number;
	description?: string;
};

const Icons: FC<IconsScheme> = ({icon, url, width, height, description}) => {
	if (url) {
		return (
			<div className='relative h-5 w-5 url'>
				<img
					src={url}
					alt={description ? description : 'URL description'}
					width={width ? width : 100}
					height={height ? height : 100}
				/>
			</div>
		);
	}

	let iconUrl;
	if (icon) {
		iconUrl = images[icon] || icon;
	}

	return (
		<>
			{iconUrl ? <div className='relative h-5 w-5 icon'><img
				src={iconUrl}
				alt={description ? description : 'Icon description'}
				width={width ? width : 100}
				height={height ? height : 100}
			/></div> : null}
		</>
	);
};

export {Icons};
