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
<<<<<<< HEAD
		const router = useRouter();
		country = router.query.country as string;
	}

=======
		country = getRouter.query.country as string;
	}
	
>>>>>>> d61a5ac658ef921cdab19fff88231e40f2e4b3f7
	return country;
};
