import type {PlainTextProps} from './index';
import {PlainTextSize} from './index';

import classNames from 'classnames';

export const plainTextClasses = ({size, bold}: PlainTextProps): string => {
	switch (size! as PlainTextSize | undefined) {
		case PlainTextSize.XL:
			return classNames('text-3xl', 'font-sans', 'leading-normal', {
				'font-bold': bold,
			});
		case PlainTextSize.Large:
			return classNames('text-lg', 'font-sans', 'leading-normal', {
				'font-bold': bold,
			});
		case PlainTextSize.SmallPrint:
			return classNames('text-xs', 'font-sans', 'leading-tight', {
				'font-bold': bold,
			});
		case PlainTextSize.Default:
		default:
			return classNames('text-base', 'font-sans', 'leading-relaxed', {
				'font-bold': bold,
			});
	}
};
