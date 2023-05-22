import React from 'react';
import type {UseFormRegisterReturn} from 'react-hook-form';

export type InputProps = {
	error?: boolean;
	errorColor?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type InputFieldProps = {
	name?: string;
	required?: boolean;
	input?: InputProps;
	children?: React.ReactNode;
	placeholder?: string;
	classname?: string;
	register?: UseFormRegisterReturn;
	error?: string;
};

export const InputField: React.FC<InputFieldProps> = ({children, register, placeholder, classname, input, error, ...props}: InputFieldProps) => {
	const border = classname ? classname : 'border-grayscale-500';
	const errorColor = error ? 'border-red-700 invalid:border-red-700 invalid:text-red3 focus:invalid:border-red-700' : border;

	return (
		<div>
			{children && <label {...props} className='mr-3'>{children}</label>}
			<div>
				<input {...input}
					className={`w-283 sm:w-275 h-49 rounded-lg p-3 bg-grayscale-100 border-2 justify-center focus:bg-grayscale-500 focus:text-grayscale-900 
					focus:border-blue-700 ${errorColor}`}
					placeholder={placeholder}
					{...register}
				/>
			</div>
			{error && <div className={'mt-2 ml-4 text-14 font-medium text-grayscale-900 text-12 text-red-500'}>{error}</div>}
		</div>
	);
};

InputField.defaultProps = {
	input: {},
	name: '',
	children: '',
	placeholder: '',
	classname: '',
};

InputField.displayName = 'InputField';

export default InputField;
