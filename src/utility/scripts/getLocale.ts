import {useRouter} from 'next/router';
import {useRef, useEffect} from 'react';

export const GetLocale = () => {
	let country = 'us';
	const mounted = useRef(false);
	const getRouter = useRouter();

	useEffect(() => {
		mounted.current = true;

		return () => {
			mounted.current = false;
		};
	}, []);

	if (mounted) {
		country = getRouter.query.country as string;
	}
	return country;
}
