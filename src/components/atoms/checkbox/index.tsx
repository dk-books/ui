import React from 'react';
import type {UseFormRegisterReturn} from 'react-hook-form';

export type CheckBoxErrorProps = {
	error?: boolean;
	errorColor?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type CheckBoxProps = {
	customId?: string;
	children?: React.ReactNode;
	placeholder?: string;
	checkBoxClassName?: string;
	labelClassName?: string;
	inputRef?: any;
	onChange?: any;
	input?: CheckBoxErrorProps;
	dotted?: boolean;
	defaultChecked?: boolean;
	register?: UseFormRegisterReturn;
	error?: string;
};

export const Checkbox: React.FC<CheckBoxProps> = ({customId, register, defaultChecked, children, placeholder, checkBoxClassName, dotted, input, error}: CheckBoxProps) => {
	const dottedDisplay = dotted ? 'pl-2 pt-2 border-dashed border-2' : '';
	const errorColor = error ? 'text-red-700' : 'text-grayscale-700';

	return (
		<div>
			<div className={`${dottedDisplay}`}>
				<div className='flex items-center mb-2'>
					<input {...input}
						defaultChecked={defaultChecked ? defaultChecked : false}
						id={customId}
						type='checkbox'
						className={`w-4 h-4 text-blue-600 bg-grayscale-300 rounded border-grayscale-200 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-grayscale-700 focus:ring-2 dark:bg-grayscale-700 dark:border-grayscale-700 ${errorColor} ${checkBoxClassName ? checkBoxClassName : ''}`}
						{...register}
					/>
					{children && <label className={'ml-2 text-14 font-medium text-grayscale-700'}>{children}</label>}
				</div>
			</div>
			{placeholder && <div className='flex items-center'><div className='form-check'><div className={'ml-6 text-14 font-medium text-grayscale-700 text-12 font-light'}>{placeholder}</div></div></div>}
			{error && <div className={`pl-6 text-14 font-medium text-12 font-light ${errorColor}`}>{error}</div>}
		</div>

	);
};

export default Checkbox;
