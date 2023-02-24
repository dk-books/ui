import React from 'react';
import {render, screen} from '@testing-library/react';
import {Button} from '.';

describe('Button', () => {
	it('renders children', () => {
		render(<Button>children</Button>);

		const button = screen.getByRole('button', {name: 'children'});
		expect(button).toBeInTheDocument();
	});

	it('renders optional icon', () => {
		render(<Button icon={'download'}>children</Button>);

		const icon = screen.getByText('children');
		expect(icon).toBeInTheDocument();
	});
});
