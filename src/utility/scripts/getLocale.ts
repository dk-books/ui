import {useRouter} from 'next/router';
import {useRef, useEffect} from 'react';

export const getLocale = () => {
	let country = 'us';
	const mounted = useRef(false);

	useEffect(() => {
		mounted.current = true;

		return () => {
			mounted.current = false;
		};
	}, []);

	if (mounted) {
		const router = useRouter();
		country = router.query.country as string;
	}

	return country;
};
