import {CMSBlockType} from '../interfaces/content-blocks';
import {BodyInterface, CMSImageInterface} from './';

export type PagePropsInterface = {
	page: PageDataInterface;
}

enum Taxonomy {
	Levels = 'levels',
	Subjects = 'subjects',
}

type NamedTaxonomy = {
	name: string;
};

export type TaxonomyLists = Record<Taxonomy, NamedTaxonomy[]>;

export interface ResourceListingPagePropsInterface extends PagePropsInterface {
	resource: string;
	market: string;
	taxonomyLists: TaxonomyLists;
}

export interface ResourcePagePropsInterface extends PagePropsInterface {
	articleDetail: DetailBlockDataInterface;
	caseStudyDetail: DetailBlockDataInterface;
	bookItem: any;
	downloadPage: DownloadInterface;
	infoDetail: DetailBlockDataInterface;
	roles: string;
}

export type PageDataInterface = {
	id: string;
	__typename: string;
	market: string;
	slug: string;
	title: string;
	zipDownload?: string;
	fileSize?: number;
	/** TO BE ADDED */
	seo: any;
	/** INTERFACES SHOULD BE ADDED FOR ALL BLOCK TYPES */
	blocks: CMSBlockType[];
}

export type DownloadInterface = {
	roles: string;
	body: {
		html: string;
		text: string;
	};
	assets: {
		id: string;
		url: string;
		image?: string;
	};

	title: string;
	subjects: Array<{name: string}>;
	levels: Array<{name: string}>;
	publisher: string;
}

export type DetailBlockPropsInterface = {
	data: DetailBlockDataInterface;
	postType?: string;
}

export type DetailBlockDataInterface = {
	title: string;
	date?: string;
	image?: {
		url: string;
	},
	body: {
		html: string;
		text: string;
	};
	seo: {
		keywords: string;
		description: string;
		title: string;
	};
	authors?: Array<{name: string}>;
	blocks: object[];
	roles: string;
}

export type AboutSectionProps = {
	data: {
		id: string;
		body: BodyInterface;
		title: string;
		date: string;
		authors: AuthorInterface[];
		image: CMSImageInterface;
		blocks: BlockDataInterface[];
	};
}

export interface BlockDataInterface {
	// TODO
}

export interface AuthorInterface {
	name?: string;
	role?: string;
	institution?: string;
}
