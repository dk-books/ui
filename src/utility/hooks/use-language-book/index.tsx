import {useState, useEffect} from 'react';
import useQuery from '../use-query';
import {useCountry} from '../use-country';
import {makeLangaugeBookCMSQuery} from '../../api/queries/queryAPI';

type makePageCMSQueryProps = {
	slug?: string;
	market?: any;
	id?: string;
};

export const useLanguageBook = ({slug}: makePageCMSQueryProps) => {
	const [book, setBook] = useState([{title: '', length: 0}]);
	const market = useCountry();

	const [data]: any = useQuery<{languageBooks: any}>(
		makeLangaugeBookCMSQuery({slug, market}),
	);

	useEffect(() => {
		if (data) {
			setBook([data.languageBooks, data.pages]);
		}
	}, [data]);

	return [book];
};
