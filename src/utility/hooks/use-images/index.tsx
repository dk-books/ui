import useQuery from '../use-query';
import {useExtractImages} from './use-extract-images';
import {frontPageImages} from '../../api/queries/images';

type ImagesQueryResult = {
	pages: Array<{
		blocks: Array<{
			images?: Array<{
				title: string;
				url: string;
			}>;
		}>;
	}>;
};

const useImages = (imageTitles: string[]) => {
	const [queryResult] = useQuery<ImagesQueryResult>(frontPageImages);
	return useExtractImages(imageTitles, queryResult);
};

export {useImages};
