import React from 'react';
import type {FC, ReactNode} from 'react';

type CenterProps = {
	children: ReactNode;
};

const Center: FC<CenterProps> = ({children}) => (
	<div className='relative h-full'>
		<div className={`
        absolute
        bottom-1/2 right-1/2
        translate-y-1/2 translate-x-1/2`}>
			{children}
		</div>
	</div>
);

export {Center};
