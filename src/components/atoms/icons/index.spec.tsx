import React from 'react';
import {render, screen} from '@testing-library/react';
import {Icons} from '.';

describe('Icons', () => {
	it('renders icon image', () => {
		render(<Icons url={'https://media.graphassets.com/Ga6W3iCCReG3TQDocMTP'}
			width={84}
			height={58}
			description={'icon'}
		/>);
		expect(screen.getByAltText('icon')).toBeInTheDocument();
	});
});
