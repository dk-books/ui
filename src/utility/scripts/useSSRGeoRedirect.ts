import {GetServerSidePropsContext} from 'next/types';

export interface RedirectPropsInterface {
	props: object;
	redirect: {
		permanent: boolean;
		destination: string;
	}
}

export const useSSRGeoRedirect = (context: GetServerSidePropsContext, country: any) => {
	const market = context.params?.country || '';
	const langCode =
		context.req.headers['accept-language']?.split(',')?.[0] || 'en-US';
	const defaultMarket = 'en';

	const codes = country.map((item: {market: string}) => {
		return item.market;
	});

	const countrySlug = codes[langCode] || defaultMarket;

	let marketCode: string;
	if (Array.isArray(market)) {
		marketCode = market[0];
	} else {
		marketCode = market as string;
	}

	const toRedirect = !Object.values(codes).includes(marketCode);
	const returnRedirect: RedirectPropsInterface = {
		props: {},
		redirect: {
			permanent: false,
			destination: `/${countrySlug}`,
		},
	};
	return [toRedirect, returnRedirect] as [boolean, RedirectPropsInterface];
};
