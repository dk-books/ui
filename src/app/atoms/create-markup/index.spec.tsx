import React from 'react';
import {render, screen} from '@testing-library/react';
import {CreateMarkup} from '.';

describe('CreateMarkup', () => {
	it('renders children', () => {
		render(<CreateMarkup>This is a CreateMarkup component</CreateMarkup>);

		const text = screen.getByText('This is a CreateMarkup component');
		expect(text).toBeInTheDocument();
	});
});
