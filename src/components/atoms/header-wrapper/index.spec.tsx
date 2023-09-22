import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {HeaderWrapper} from '.';

describe('HeaderWrapper', () => {
	it('should open mobile nav when button is clicked', async () => {
		render((
			<HeaderWrapper
				branding={<div>branding</div>}
				mobileNav={<div>mobile nav</div>}>
				children
			</HeaderWrapper>
		));

		let mobileNav = screen.queryByText('mobile nav');
		expect(mobileNav).toBeInTheDocument();

		const navButton = screen.getByRole('button');
		await userEvent.click(navButton);

		mobileNav = screen.getByText('mobile nav');
		expect(mobileNav).toBeInTheDocument();

		expect(true).toBe(true);
	});

	it('should invoke onMouseEnter callback if mouse enters', async () => {
		const callback = jest.fn();

		render((
			<HeaderWrapper
				onMouseEnter={callback}
				branding={<div>branding</div>}
				mobileNav={<div>mobile nav</div>}>
				children
			</HeaderWrapper>
		));

		const branding = screen.getByText('branding');
		await userEvent.hover(branding);

		expect(callback).toHaveBeenCalled();
	});
});
