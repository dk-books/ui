import React from 'react';
import {render, screen} from '@testing-library/react';
import {DropdownTemplate} from '.';

describe('DropdownTemplate', () => {
	it('renders dropdown template message', () => {
		render(<DropdownTemplate display={true}><div>Hello DK</div></DropdownTemplate>);

		expect(screen.getByText('Hello DK')).toBeInTheDocument();
	});
});
