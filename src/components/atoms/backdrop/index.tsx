import React from 'react';
import type {FC} from 'react';
import {useImages} from '../../../utility/hooks/use-images';
import Image from 'next/image';

type BackdropProps = {
	children?: React.ReactNode;
};

const Backdrop: FC<BackdropProps> = ({
	children,
}) => {
	const imageUrls = useImages([
		'Top-left_new',
		'Top-right_new',
		'bottom-left_new',
		'Bottom-right_new',
	]);

	const imageClasses = 'absolute sm:w-40 md:w-72 lg:w-96 z-0';

	return (
		<>
			<div className={`${imageClasses} left-0 z-0`}>
				<img
					src={imageUrls['Top-left_new'] ? imageUrls['Top-left_new'] : 'https://media.graphassets.com/2do0SVlIRGrTeaSJObQd'}
					alt='Top left'
					width='800'
					height='456'
				/>
			</div>

			<div className={`${imageClasses} left-0 bottom-0`}>
				<img
					src={imageUrls['bottom-left_new'] ? imageUrls['bottom-left_new'] : 'https://media.graphassets.com/EADW3aNBTKCT4lXL9jcf'}
					alt='Bottom left'
					width='653'
					height='253'
				/>
			</div>

			<div className={`${imageClasses} absolute right-0`}>
				<img
					src={imageUrls['Top-right_new'] ? imageUrls['Top-right_new'] : 'https://media.graphassets.com/BT3HJSi6QKygb9uCh0Ev'}
					alt='Top right'
					width='800'
					height='457'
				/>
			</div>

			<div className={`${imageClasses} right-0 bottom-0`}>
				<img
					src={imageUrls['Bottom-right_new'] ? imageUrls['Bottom-right_new'] : 'https://media.graphassets.com/5Me6Lc1HRwywDTttpabm'}
					alt='Bottom right'
					width='635'
					height='253'
				/>
			</div>

			<div className='relative z-10 container mx-auto flex flex-col'>
				{children}
			</div>
		</>
	);
};

export {Backdrop};
