import {useCallback} from 'react';
import useLocalStorage from 'use-local-storage';

const useSavedLanguage = (): [string, (language: string) => void] => {
	const [language, set] = useLocalStorage<string>('language', '');
	const saveLanguage = useCallback((value: string) => set(value), []);
	return [language || '', saveLanguage];
};

export {useSavedLanguage};
