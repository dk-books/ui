import useQuery from "../../hooks/use-query";
import {fullLanguagesQuery} from '../../api/queries/languages';

type Response = {
	sites: [{
		markets: [{
			header: {
				menu: {
					submenus: [{
						submenus: Array<{
							title: string,
							path: string
						}>,
					}]
				}
			}
		}]
	}]
};

const useAvailableLanguages = (): Array<{language: string, code: string}> => {

	const [data] = useQuery<Response>(fullLanguagesQuery);

	if (!data || !data.sites) {
		return [];
	}

	return data
		.sites[0]
		.markets[0]
		.header
		.menu
		.submenus[0]
		.submenus
		.map(({title, path}) => {

			return {
				language: title,
				code: `${path[1]}${path[2]}`
			};
		});
};

export default useAvailableLanguages;
