import {useCallback} from 'react';
import useLocalStorage from 'use-local-storage';

const useSavedLanguage = (): [string, (language: string) => void] => {
	const [language, languageSet] = useLocalStorage<string>('language', '');

	const saveLanguage = useCallback(
		(language: string) => {
			languageSet(language);
		},
		[languageSet],
	);

	return [language || '', saveLanguage];
};

export {useSavedLanguage};
