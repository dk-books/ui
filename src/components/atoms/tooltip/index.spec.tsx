import React from 'react';
import {render, screen} from '@testing-library/react';
import {ToolTip} from '.';

describe('ToolTip', () => {
	it('renders tooltip message', () => {
		render(<ToolTip message={'Testing Tooltip message'}></ToolTip>);

		const toolTip = screen.getByText('Testing Tooltip message');
		expect(toolTip).toBeInTheDocument();
	});
});
