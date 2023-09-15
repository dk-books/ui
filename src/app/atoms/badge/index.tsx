import React from 'react';
import type {FC, ReactNode} from 'react';
import {efeBtn} from '../../../utility/themes/efe/theme';

type BadgeProps = {
	children: ReactNode;
	colour?: 'default' | 'green' | 'yellow' | 'orange' | 'navy';
	onClick: () => void;
};

const Badge: FC<BadgeProps> = ({children, colour = 'default', onClick}) => (
	<div
		className={`w-[212px] h-[212px] flex items-center justify-center ${
			efeBtn[colour] || efeBtn.default
		} rounded-[50%]`}
	>
		<button
			onClick={onClick}
			className={`w-[182px] h-[182px]  ${
				efeBtn[colour] || efeBtn.default
			} border-10 border-grayscale-100 rounded-[50%] flex justify-center items-center`}
		>
			{children}
		</button>
	</div>
);

export {Badge};
