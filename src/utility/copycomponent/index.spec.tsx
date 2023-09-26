import React from 'react';
import {render, screen} from '@testing-library/react';
import {CopyComponent} from '.';

describe('CopyComponent', () => {
	it('renders dropdown template message', () => {
		render(<CopyComponent><div>Copy component to new component</div></CopyComponent>);

		expect(screen.getByText('Copy component to new component')).toBeInTheDocument();
	});
});
