import {
	ImageSource,
	CMSImageInterface,
	ButtonInterface,
} from '../index';
import {DimensionsMediaInterface} from '../picture/';
import {OverlayPropsInterface} from '../utils.interface';

export type BodyInterface = {
	html: string;
	text: string;
	markdown?: string;
}

import {
	CMSHeaderBlockInterface,
	CMSFooterBlockInterface,
} from '../';

import {CMSCardBlockInterface} from '../utils.interface';

export type CMSBlockType =
	| CMSHeaderBlockInterface
	| CMSFooterBlockInterface
	| CMSBlockInterface
	| CMSCardBlockInterface
	| CMSContentBlockInterface
	| CMSListBlockInterface
	| CMSNewsletterBlockInterface
	| CMSNewsletterFormInterface
	| CMSWallAccountInterface;

export interface ImageInterface extends CMSImageInterface {
	/** What field is this for? */
	field?: string;
	/** alt text */
	alt?: string;
	/** image source */
	source?: ImageSource;
	url?: string;
	height?: number;
	width?: number;
}

export interface GenericDataInterface<T> {
	name: string;
	content: T;
}

export interface ComponentPropsInterface<T> {
	data?: T;
	error?: boolean;
	showHeading?: boolean;
	downloads?: T;
}

export interface RouteDataInterface {
	/** The name of this page */
	name: string;
	/** the full path for this page */
	route: string;
	/** Names of the breadcrumbs for this page */
	breadcrumbs: string[];
	/** What category of page is this from the users POV */
	pageType: string;
	/** Tags that should make this page easily searchable */
	searchTags: string[];
	/** A description of this page for links and search results */
	description?: string;
	/** An array of the sections or article blocks that comprise this page */
	content: Array<any>;
}

export interface TextValueInterface {
	label: string;
	value: string;
}

export type BlockDataType =
	| ImageBlockInterface
	| ArticleDetailsBlock
	| BookPromoBlock
	| QuoteBlock
	| HTMLBlockInterface
	| VideoBlockInterface;

interface ImageBlockInterface {
	type: 'image';
	image: ImageInterface;
	dimensions: DimensionsMediaInterface;
}

interface ArticleDetailsBlock {
	type: 'article-details';
	articleType: string;
	postedDate: TextValueInterface;
}

type BookPromoBlock = {
	type: 'book-promo';
	image: ImageInterface;
	imageDimensions: DimensionsMediaInterface;
	title: string;
	description: string;
	price: TextValueInterface;
	button: ButtonInterface;
}

type QuoteBlock = {
	type: 'quote-block';
	text: string;
	image: ImageInterface;
}

type HTMLBlockInterface = {
	type: 'html';
	text: string;
}

type VideoBlockInterface = {
	type: 'video-block';
	url: string;
}
export type BlockColourType = 'white' | 'blue' | 'grey';

export type CMSBlockInterface = {
	__typename: string;
	type?: string;
	id: string;
	title: string;
	body: BodyInterface;
	ctas: any[];
	images: CMSImageInterface[];
	reversed: boolean;
	colourScheme: BlockColourType;
	border: boolean;
	fixImageToBottom: boolean;
	subblocks: any[];
	config?: any;
	backgroundImage?: CMSImageInterface;
	centerText?: boolean;
	hideTitle?: boolean;
	index?: number;
	bookSeriesIndex?: number;
	layout: string;
}

export type CMSContentBlockInterface = {
	__typename: 'ContentBlock';
	id: string;
	body: BodyInterface;
	title: string;
	hideTitle: boolean;
	type?: string;
	index?: number;
	bookSeriesIndex?: number;
	layout: string;
}

export type CMSListBlockInterface = {
	hits: any;
	__typename: 'ListBlock';
	id: string;
	levels: string;
	results: string;
	subtitle: string;
	subjects: string;
	title: string;
	topics: string;
	filters: string;
	curriculum: string;
	ages: string;
	curriculumAims: string;
	queryField?: string;
	queryText?: string;
	type?: string;
	index?: number;
	bookSeriesIndex?: number;
	layout: string;
}

export type CMSNewsletterBlockInterface = {
	__typename: 'NewsletterBlock';
	id: string;
	images: CMSImageInterface[];
	inputPlaceholderText: string;
	submitButtonText: string;
	title: string;
	body: BodyInterface;
	description?: string;
	buttonIcon?: string;
	buttonColour?: string;
	buttonUrl?: string;
	externalLink?: boolean;
	emailContact?: string;
	type?: string;
	index?: number;
	bookSeriesIndex?: number;
	layout: string;
	backgroundColor?: string;
}

export type CMSNewsletterFormInterface = {
	newsLetterData: any;
	__typename: 'NewsletterForm';
	id: string;
	images: CMSImageInterface[];
	inputPlaceholderText: string;
	submitButtonText: string;
	title: string;
	body: BodyInterface;
	newsletterBody: BodyInterface;
	description?: string;
	buttonIcon?: string;
	buttonColour?: string;
	buttonUrl?: string;
	externalLink?: boolean;
	emailContact?: string;
	type?: string;
	index?: number;
	bookSeriesIndex?: number;
	layout?: string;
	noThanksMessage?: string;
	termsAndConditionsBody?: BodyInterface;
	termsAndConditions?: string;
	successfulSubmitionBody?: BodyInterface;
	successfulSubmissionButtonTitle?: string;
	successfulSubmitionButton?: ButtonInterface;
	successfulSubmissionUrl?: string;
}

export interface CMSWallAccountInterface extends OverlayPropsInterface {
	id: string;
	__typename: 'WallAccount';
	title: string;
	type?: string;
	index?: number;
	bookSeriesIndex?: number;
	layout: string;
}
