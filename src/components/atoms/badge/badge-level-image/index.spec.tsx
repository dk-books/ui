import React from 'react';
import {render, screen} from '@testing-library/react';
import {BadgeLevelImage} from '.';

describe('it loads the image', () => {
	it('renders children', () => {
		render(<BadgeLevelImage level='./assets/svgs/pre-level.svg' title='one' />);
		const image = screen.getByAltText('one');
		expect(image).toBeInTheDocument();
	});
});
