import React from 'react';
import type {FC} from 'react';
import {Center} from '../center';

type LanguageCardProps = {
	language: string;
};

const LanguageCard: FC<LanguageCardProps> = ({language}) => (
	<div className={`text-base font-bold rounded border-2
      text-gray-500 border-stone-300 h-full`}>
		<Center>
			{language}
		</Center>
	</div>
);

export {LanguageCard};
