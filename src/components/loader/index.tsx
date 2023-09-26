import React from 'react';
const Loader = () => (
	<div className={'absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'}>
		<svg className='animate-spin' width='52' height='52' viewBox='0 0 52 52' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path fillRule='evenodd' clipRule='evenodd' d='M26 52C11.6406 52 0 40.3594 0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52ZM26 42C17.1634 42 10 34.8366 10 26C10 17.1634 17.1634 10 26 10C34.8366 10 42 17.1634 42 26C42 34.8366 34.8366 42 26 42Z' fill='url(#paint0_linear_842_25579)' />
			<path fillRule='evenodd' clipRule='evenodd' d='M26 52C11.6406 52 0 40.3594 0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52ZM26 42C17.1634 42 10 34.8366 10 26C10 17.1634 17.1634 10 26 10C34.8366 10 42 17.1634 42 26C42 34.8366 34.8366 42 26 42Z' fill='url(#paint1_linear_842_25579)' />
			<defs>
				<linearGradient id='paint0_linear_842_25579' x1='26' y1='26' x2='26' y2='-1.61857e-06' gradientUnits='userSpaceOnUse'>
					<stop stopColor='#999999' stopOpacity='0' />
					<stop offset='0.0001' stopColor='#999999' />
					<stop offset='1' stopColor='#999999' />
				</linearGradient>
				<linearGradient id='paint1_linear_842_25579' x1='41.5' y1='42.5' x2='26' y2='48.5' gradientUnits='userSpaceOnUse'>
					<stop stopColor='#999999' stopOpacity='0' />
					<stop offset='1' stopColor='#999999' />
				</linearGradient>
			</defs>
		</svg>
	</div>
);

export {Loader};
