import {useRouter} from 'next/router';

const useCountry = () => {
	const {query, asPath} = useRouter();

	let country = query.country as string;
	if (!country) {
<<<<<<< HEAD
		// Query object isn't populated sometimes on first render,
		// So we can get the country from asPath
		// Eslint-disable-next-line
=======
		// query object isn't populated sometimes on first render,
		// so we can get the country from asPath
		//eslint-disable-next-line
>>>>>>> d61a5ac658ef921cdab19fff88231e40f2e4b3f7
		const match = asPath.match(new RegExp('^\/[a-z]{2}(\/.*)?$'));
		country = match?.length ? match[0].substr(1, 2) : '';
	}

	return country;
};

export {useCountry};
