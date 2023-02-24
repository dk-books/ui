import React from 'react';
import {render, screen} from '@testing-library/react';
import {Backdrop} from '.';

describe('Backdrop', () => {
	it('renders dropdown template message', () => {
		render(<Backdrop><div>Copy component to new component</div></Backdrop>);

		expect(screen.getByText('Copy component to new component')).toBeInTheDocument();
	});
});
