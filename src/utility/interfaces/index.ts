import type {
	NewImageInterface,
	CMSImageInterface,
} from './picture';
import {
	FooterInterface,
	NavItemInterface,
} from './footer';
export * from './picture';
export * from './footer';
export * from './button';
import {CMSBlockType} from "./content-blocks";

type BodyInterface = any;

type CategorisedBlocks = {
	mainContent: Array<CMSBlockType>,
	headerContent: CMSHeaderBlockInterface,
	footerContent: CMSFooterBlockInterface
};

interface HeaderInterface {
	/** What is this data for? */
	type?: any;
	/** The main image in the header */
	image?: ImageInterface;
	logo?: NewImageInterface;
	/** the content for the sign-in */
	signInText?: string;
	/** The content for the login */
	loginText?: string;
	/** Country settings button */
	countryText?: string;
	countrySettings?: ImageButtonInterface;
	countryFlag?: NewImageInterface;
	/** The items in the navigation */
	navItems?: NavItemInterface[];
	menu?: NewMenuItemInterface | any;
	/** The items for search-bar */
	searchPlaceholder?: string;
	recentlySearched?: string;
	deleteText?: string;
	deleteButton?: string;
	historyMessage?: string;
	viewResults?: string;
	countrySelectorText?: string;
	countrySelectorHeadingText?: string;
	getTheApp?: string;
}

export interface ImageButtonInterface {
	/** Button label */
	label?: string;
	image?: ImageInterface;
}

interface ImageInterface extends CMSImageInterface {
	/** What field is this for? */
	field?: string;
	/** Alt text */
	alt?: string;
	/** Image source */
	source?: ImageSource;
	// Url?: string;
	// Height?: number;
	// Width?: number;
}

interface ImageSource {
	/** name of the image file */
	filename: string;
	/** bucket location where the image file sits */
	location: string;
}


export interface MenuItemInterface {
	submenus?: SubMenuInterface[];
	name?: string;
	link?: string;
	dropdownHeading?: string;
}
export interface NewMenuItemInterface {
	id?: string;
	title?: string;
	submenus?: SubMenuInterface[];
	name?: string;
	link?: string;
	icon?: ImageInterface;
}

export interface SubMenuInterface {
	id?: string;
	title?: string;
	path?: string;
	submenus?: SubMenuInterface[];
	name?: string;
	link?: string;
	icon?: ImageInterface;
}
export interface NavSubItemInterface {
	id?: string;
	title?: string;
	path?: string;
	icon?: ImageInterface;
}

/** button with image */
export interface ImageButtonInterface {
	/** button label */
	label?: string;
	image?: ImageInterface;
}

interface CMSHeaderBlockInterface extends HeaderInterface {
	id: string;
	__typename: 'Header';
	index?: number;
	bookSeriesIndex?: number;
	layout: string;
	acc?: {headerContent: string}
}

interface CMSFooterBlockInterface extends FooterInterface {
	id: string;
	type?: string;
	__typename: 'Footer';
	index?: number;
	bookSeriesIndex?: number;
	layout?: string;
}

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

export type {
	CTACardInterface,
	HeaderInterface,
	ImageInterface,
	CMSFooterBlockInterface,
	CMSHeaderBlockInterface,
	CategorisedBlocks,
	BodyInterface,
};

export interface PageLayoutInterface {
	/** The data for the header component */
	headerData?: HeaderInterface;
	/** The data for the footer component */
	footerData?: FooterInterface;
	/** The data for the main content on this page */
	children: JSX.Element;
	/** are we showing a minimal header */
	minimalHeader?: boolean;
}

export interface PageMetaDataInterface {
	seo?: MetaDataSEOInterface
	image?: MetaAataImageInterface
}

export interface MetaAataImageInterface {
	url: string;
}

export interface MetaDataSEOInterface {
	id: string;
	title: string;
	description: string;
	keywords?: string;
}

export interface CardSwitcherInterfaces {
	children: React.ReactNode;
	onClick?: () => void;
	link?: string;
	newTab?: string;
}