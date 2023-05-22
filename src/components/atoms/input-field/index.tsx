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
	const border = classname ? classname : 'border-gray-ccc';
	const errorColor = error ? 'border-red3 invalid:border-red3 invalid:text-red3 focus:invalid:border-red3' : border;

	return (
		<div>
			{children && <label {...props} className='mr-3'>{children}</label>}
			<div>
				<input {...input}
					className={`w-283 sm:w-275 h-49 rounded-lg p-3 bg-grayscale-100 border-2 justify-center focus:bg-gray-ccc focus:text-black 
					focus:border-blue3 ${errorColor}`}
					placeholder={placeholder}
					{...register}
				/>
			</div>
			{error && <div className={'mt-2 ml-4 text-14 font-medium text-book-black text-12 text-red-500'}>{error}</div>}
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
