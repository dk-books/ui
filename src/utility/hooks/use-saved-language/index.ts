import {useCallback} from 'react';
import useLocalStorage from 'use-local-storage';

const useSavedLanguage = (): [string, (language: string) => void] => {
<<<<<<< HEAD
	const [language, set] = useLocalStorage<string>('language', '');
	const saveLanguage = useCallback((value: string) => set(value), []);
=======
	const [language, languageSet] = useLocalStorage<string>('language', '');

	const saveLanguage = useCallback(
		(language: string) => {
			languageSet(language);
		},
		[languageSet],
	);

>>>>>>> d61a5ac658ef921cdab19fff88231e40f2e4b3f7
	return [language || '', saveLanguage];
};

export {useSavedLanguage};
