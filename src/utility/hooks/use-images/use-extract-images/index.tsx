import type {ImagesQueryResult} from '..';

type Image = {
	title: string;
	url: string;
};

const useExtractImages = (titles: string[],	unextractedImages?: ImagesQueryResult): Record<string, string> => {
	if (!unextractedImages?.pages[0]?.blocks) {
		return {};
	}

	return unextractedImages
		.pages[0]
		.blocks
		.reduce((images: Image[], block) => {
			if (!block.images) {
				return images;
			}

			return [
				...images,
				...block.images,
			];
		}, [])
		.filter(
			(image: Image) => titles.includes(image.title),
		)
		.reduce(
			(
				imageUrls: {title: string; url: string},
				image: Image,
			) => ({
				...imageUrls,
				[image.title]: image.url,
			}),
		);
};

export {useExtractImages};
