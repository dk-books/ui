import {useRouter} from "next/router";

const useCountry = () => {

	const {query, asPath} = useRouter();

	let country = query.country as string;
	if (!country) {
		// query object isn't populated sometimes on first render,
		// so we can get the country from asPath
		//eslint-disable-next-line
		const match = asPath.match(new RegExp('^\/[a-z]{2}(\/.*)?$'));
		country = match?.length ? match[0].substr(1, 2) : '';
	}

	return country;
};

export {useCountry};
