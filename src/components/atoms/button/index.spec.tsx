import React from 'react';
import {render, screen} from '@testing-library/react';
import {Button} from '.';

describe('Button', () => {
	it('renders optional icon', () => {
		render(<Button icon={'download'} href='/book'>children</Button>);
		expect(screen.getByRole('img')).toHaveAttribute('alt', 'Icon description');
	});
});
