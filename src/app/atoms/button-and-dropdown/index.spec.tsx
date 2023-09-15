import React from 'react';
import {render, screen} from '@testing-library/react';
import {ButtonAndDropdown} from '.';

describe('ButtonAndDropdown', () => {
	it('renders dropdown template message', () => {
		render(<ButtonAndDropdown button='hello'>Hello DK</ButtonAndDropdown>);
		expect(screen.getByText('Hello DK')).toBeInTheDocument();
	});
});
