import React from 'react';
import type {FC} from 'react';
import {LanguageCard} from '../atoms';

type LanguageSelectProps = {
	languages: string[];
	onSelected?: (language: string) => void;
};

const LanguageSelect: FC<LanguageSelectProps> = ({languages, onSelected}) => (
	<div className={`border border-gray-200 bg-zinc-50
      shadow-inner rounded-lg p-3 md:py-5 md:px-6`}>

		<div className='flex flex-wrap -m-1'>

			{languages.map((language: string) => (
				<div className='p-1 w-full sm:w-1/2 md:w-1/3' key={language}>
					<button
						className='w-full h-16'
						onClick={() => onSelected?.(language)}>
						<LanguageCard language={language} />
					</button>
				</div>
			))}

		</div>
	</div>
);

export {LanguageSelect};
