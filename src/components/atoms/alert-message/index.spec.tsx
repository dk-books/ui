import React from 'react';
import {render, screen} from '@testing-library/react';
import {AlertMessage} from '.';

describe('AlertMessage', () => {
	it('renders alert message message', () => {
		render(<AlertMessage
			successMessage={'You have successfully saved your updated details'}
			errorMessage={'Your update failed due to an internal error. Please try again later'}
		/>);

		expect(screen.getByText('You have successfully saved your updated details')).toBeInTheDocument();
		expect(screen.getByText('Your update failed due to an internal error. Please try again later')).toBeInTheDocument();
	});
});
