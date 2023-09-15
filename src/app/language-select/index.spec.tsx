import React from 'react';
import {render, screen, within} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {LanguageSelect} from '.';

describe('LanguageSelect', () => {
	const getLanguageButton = (language: string) => {
		const buttons = screen.getAllByRole('button');

		const index = buttons.findIndex(button => within(button).queryByText(language));

		return buttons[index];
	};

	it('should render a button for each provided language', () => {
		const languages = ['English', 'Deutsch', 'Random Language'];
		render(<LanguageSelect languages={languages} />);

		languages.forEach((language: string) => {
			const button = getLanguageButton(language);
			expect(button).toBeInTheDocument();
		});
	});

	it('should invoke callback when a language is selected', async () => {
		const languages = ['English', 'Deutsch', 'Random Language'];
		const selected = jest.fn();
		render(<LanguageSelect
			languages={languages}
			onSelected={selected} />);

		const button = getLanguageButton('Deutsch');
		await userEvent.click(button);

		expect(selected).toHaveBeenCalledWith('Deutsch');
	});
});
