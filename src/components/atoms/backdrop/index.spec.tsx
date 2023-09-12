import React from 'react';
import {render} from '@testing-library/react';
import {Backdrop} from '.';

describe('Backdrop', () => {
	it('should render without crashing', () => {
		const {baseElement} = render(<Backdrop />);

		expect(baseElement).toBeTruthy();
	});
	it('should render with children', () => {
		const {baseElement} = render(<Backdrop><div>Test</div></Backdrop>);

		expect(baseElement).toBeTruthy();
	}
	);
});