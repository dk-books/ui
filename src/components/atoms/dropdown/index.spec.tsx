import React from 'react';
import {render, screen} from '@testing-library/react';
import {Dropdown} from '.';

describe('Dropdown', () => {
	it('renders dropdown template message', () => {
		render(<Dropdown open={true}>Hello DK</Dropdown>);
		expect(screen.getByText('Hello DK')).toBeInTheDocument();
	});
});
