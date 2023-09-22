import React from 'react';
import {render} from '@testing-library/react';
import {InputField} from '.';

describe('Input', () => {
	const input = {
		name: 'inputTitle',
		children: 'children',
		input: {name: 'inputError'},
		placeholder: 'Type something here',
	};

	it('renders children', () => {
		render(<InputField name={input.name} placeholder={input.placeholder} >{input.children}</InputField>);
	});
});
