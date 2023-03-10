import {DetailBlockDataInterface} from '../interfaces/page.interface';
import {CMSBlockType} from '../interfaces/content-blocks';
export interface PagePropsInterface {
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

export interface PageDataInterface {
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

export interface DownloadInterface {
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
