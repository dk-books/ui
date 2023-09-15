interface CTACardInterface {
	externalLink: boolean;
	__typename: 'Cta';
	title: string;
	url: string;
	body: any;
	image: CMSImageInterface;
	slug?: string;
	ctaType?: string;
	buttonText?: string;
	buttonColour?: string;
	buttonicon?: string;
	alignContents?: 'left' | 'center';
}

export interface CMSImageInterface {
	height?: number;
	width?: number;
	url?: string;
	description?: string;
	title?: string;
	link?: string;
	alt?: string;
}

export interface BodyInterface {
	html?: string;
	text?: string;
	markdown?: string;
}

interface CTACardInterface {
	externalLink: boolean;
	__typename: 'Cta';
	title: string;
	url: string;
	image: CMSImageInterface;
	slug?: string;
	ctaType?: string;
	buttonText?: string;
	buttonColour?: string;
	buttonicon?: string;
	alignContents?: 'left' | 'center';
}

export interface ButtonCardInterface {
	/** Button title */
	title: string;
	/** Button link */
	link: string;
	/** What colour is this button */
	colour: string;
	/** If the button is for an external link, an icon will be dispalayed */
	isExternalLink: boolean;
	/** Button icon src */
	iconSrc?: string;
}

export interface ColorSchemeInterface {
	background: string;
	backgroundHover: string;
}

export type CardBlockLayoutType = 'four_column' | 'three_column' | 'two_column' | 'one_column';

export type CTACardTypeName = 'Cta';
export type ARTICLECardTypeName = 'Article';
export type EVENTCardTypeName = 'Event';

export type CMSCardBlockInterface = {
	id: string;
	title: string;
	body: any;
	heading?: string;
	path?: string;
	type?: string;
	__typename: string;
	layout: CardBlockLayoutType;
	cards: Array<CTACardInterface>;
	submitButtonText?: string;
	index?: number;
	bookSeriesIndex?: number;
}
export type OverlayPropsInterface = {
	// /** content to go inside the modal */
	// children: JSX.Element[];
	/** should the modal be displayed? */
	display: boolean;
	content?: {
		id: string;
		title: string;
		body?: {
			text?: string;
			html?: string;
		};
		wallImage?: {
			url?: string;
		};
		colourSchema?: string;
	};
}
