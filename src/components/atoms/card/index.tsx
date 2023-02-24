import React from 'react';
import type {FC} from 'react';

export type CardProps = {
	title: string;
	image: string;
	text: string;
};

export const Card: FC<CardProps> = ({title, image, text}) => {
	function createMarkup(data: string) {
		return {__html: data};
	}

	return (
		<div className='my-4 mx-[20px]'>
			{title ? <h3>{title}</h3> : null}
			<div className='p-4 flex flex-col items-center text-center text-[14px] !rounded-xl shadow-sm shadow-gray-100'>
				<div className='w-[52px] my-4'>
					<img src={image} alt='' />
				</div>
				<div className={'mb-4'} dangerouslySetInnerHTML={createMarkup(text)} />
			</div>
		</div>
	);
};
