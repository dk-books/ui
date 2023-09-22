import React from 'react';
import {render, screen} from '@testing-library/react';
import {LanguageCard} from '.';

describe('LanguageCard', () => {
	it('should render language', () => {
		render(<LanguageCard language='English' />);
		const lang = screen.getByText('English');

		expect(lang).toBeInTheDocument();
	});
});
