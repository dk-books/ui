import React from 'react';
import {render, screen} from '@testing-library/react';
import {Card} from '.';

describe('Card', () => {
	const input = {
		title: 'This is a Card component',
		image: '/images/efe-fallback.jpg',
		text: 'This is a description of the card. It has some description text in it',
	};

	it('renders children', () => {
		render(<Card {...input} />);
		expect(screen.getByText(input.title)).toBeInTheDocument();
	});
});
