import {Cloudinary} from '@cloudinary/url-gen';
import {Resize} from '@cloudinary/url-gen/actions/resize';

const cld = new Cloudinary({
	cloud: {
		cloudName: 'dk-hub',
	},
	url: {secure: true},
});

export const squareThumbnailURL = (
	isbn: string,
	sidePx: number,
	imgKey: string,
) => {
	if (isbn) {
		const cloudinaryImage = cld.image(
			`dk-core-nonprod/${isbn}/${isbn}${imgKey}.jpg`,
		);

		cloudinaryImage.resize(
			Resize.scale()
				.width(sidePx)
				.height(sidePx),
		);

		return cloudinaryImage.toURL();
	}
};

export const fixedHeightAspectImageURL = (
	isbn: string,
	heightPx: number,
	imgKey: string,
) => {
	if (isbn) {
		const cloudinaryImage = cld.image(
			`dk-core-nonprod/${isbn}/${isbn}${imgKey}.jpg`,
		);

		cloudinaryImage.resize(Resize.scale().height(heightPx));

		return cloudinaryImage.toURL();
	}
};
