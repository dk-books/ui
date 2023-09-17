import React from 'react';
import type {FC} from 'react';
import {useImages} from '../../../utility/hooks/use-images';

type BackdropProps = {
	children?: React.ReactNode;
};

const Backdrop: FC<BackdropProps> = ({
	children,
}) => {
	const imageUrls: any = useImages([
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
					src={imageUrls['Top-left_new'] ? imageUrls['Top-left_new'] : 'Top-left_new'}
					alt='Top left'
					width='800'
					height='456'
				/>
			</div>

			<div className={`${imageClasses} left-0 bottom-0`}>
				<img
					src={imageUrls['bottom-left_new'] ? imageUrls['bottom-left_new'] : 'bottom-left_new'}
					alt='Bottom left'
					width='653'
					height='253'
				/>
			</div>

			<div className={`${imageClasses} absolute right-0`}>
				<img
					src={imageUrls['Top-right_new'] ? imageUrls['Top-right_new'] : 'Top-right_new'}
					alt='Top right'
					width='800'
					height='457'
				/>
			</div>

			<div className={`${imageClasses} right-0 bottom-0`}>
				<img
					src={imageUrls['Bottom-right_new'] ? imageUrls['Bottom-right_new'] : 'Bottom-right_new'}
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
