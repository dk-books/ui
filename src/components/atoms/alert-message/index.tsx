import React from 'react';
import type {FC, ReactNode} from 'react';

type AlertMessageProps = {
	successMessage?: ReactNode;
	errorMessage?: ReactNode;
};

const AlertMessage: FC<AlertMessageProps> = ({
	successMessage,
	errorMessage,
}) => (
	<>
		{successMessage && (
			<div
				className={'w-auto inline-block mt-8 rounded-xl border border-green-500 bg-alert-success xl:text-14 lg:text-12 md:text-12 sm:text-12 flex justify-center'}>
				<span
					className={'font-medium	 text-green-600 px-5 py-2.5 leading-5'}>
					{successMessage}
				</span>
			</div>
		)}
		{errorMessage && (
			<div
				className={'w-auto inline-block mt-8 sm:w-full rounded-xl border border-red-400 bg-red-50 text-red-700 xl:text-14 lg:text-12 md:text-12 sm:text-12 flex justify-center'}>
				<span
					className={'font-medium	text-red-400 px-5 py-2.5 leading-5'}>
					{errorMessage}
				</span>
			</div>
		)}
	</>
);

export {AlertMessage};
