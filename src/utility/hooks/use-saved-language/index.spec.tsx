import {renderHook} from '@testing-library/react-hooks';
import {act} from '@testing-library/react';
import {useSavedLanguage} from '.';

describe('useSavedLanguage', () => {

	const setLanguage = (value: string) => {
		const {result: {current}} = renderHook(() => useSavedLanguage());
		const [saveLanguage] = current;

		saveLanguage(value);
	};

	afterEach(() => {

		act(() => {
			setLanguage('');
		});
	});

	it('should return a empty string before any language is set', () => {
		const {result: {current}} = renderHook(() => useSavedLanguage());
		const [savedLanguage] = current;
		expect(savedLanguage).toBe('');
	});

	it('can set and retrieve saved language', () => {

		act(() => {
			setLanguage('sk');
		});

		const result = renderHook(() => useSavedLanguage());
		const [newSavedLanguage] = result.result.current;

		expect(newSavedLanguage).toBe('sk');
	});
});
