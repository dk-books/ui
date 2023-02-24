import React from 'react';
import {render, screen} from '@testing-library/react';
import {ContentBlock} from '.';

describe('ContentBlock', () => {
	const homePageHighlight = {
		action: 'Click',
		category: 'HomePage Highlight',
		label: 'cta',
	};

	it('renders ContentBlock', () => {
		render(<ContentBlock
			type={'Cta'}
			buttonText={'Buy the books'}
			buttonColour={'red'}
			buttonicon={'book'}
			ctaType= {'cta'}
			text={'Teach yourself English from beginner to advanced with a range of course and practice books. Includes general English, business English and a grammar guide.'}
			href={'/en/buy-books'}
			title={'Course & practice books'}
			externalLink={false}
			onClick={() => homePageHighlight}
		/>);

		expect(screen.getByText('Course & practice books')).toBeInTheDocument();
	});
});
