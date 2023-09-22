import React from 'react';
import {render} from '@testing-library/react';
import {Checkbox} from '.';

describe('Checkbox', () => {
	const input = {
		children: 'children',
		meta: {
			touched: true,
			error: 'Error message here...',
		},
		placeholder: 'Type something here',
	};

	it('renders children', () => {
		render(<Checkbox placeholder={input.placeholder}>{input.children}</Checkbox>);
	});
});
