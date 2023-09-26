import React, {useState} from 'react';
import type {FC} from 'react';

type ToolTipProps = {
	message?: string;
};

const ToolTip: FC<ToolTipProps> = ({
	message,
}) => {
	const [closeToolTip, setCloseToolTip] = useState(false);

	return (
		<div className={`${closeToolTip ? 'hidden' : ''} absolute left-0 w-full max-w-[220px] z-10 m-1`}>
			<div className='shadow-arrow absolute w-5 h-5 left-16 top-[2px] bg-grayscale-100 rotate-45 z-10'></div>
			<div className={'flex whitespace-normal text-left mt-3 relative bg-grayscale-100 border rounded py-3 pl-3 pr-8 shadow-error border-grayscale-400 min-h-[50px]'}>
				<p>{message}</p>
			</div>
			<button onClick={() => {
				setCloseToolTip(true);
			}} type='button' className='absolute top-4 right-0 rounded-md p-2 inline-flex items-center justify-center text-grayscale-500 hover:text-grayscale-700  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
				<span className='sr-only'>Close menu</span>

				<svg className='h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
					<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
				</svg>
			</button>
		</div>
	);
};

export {ToolTip};
