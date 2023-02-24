import type {ImageInterface,	NewImageInterface} from '../';

export interface FooterInterface {
	type?: any;
	navItems?: NavItemInterface[];
	trademark?: FooterTrademarkInterface;
	logo?: NewImageInterface;
	title?: string;
	menu?: FooterMenuInterface;
	body?: TrademarkContentInterface;
}

export interface TrademarkContentInterface {
	html: string;
	text: string;
	raw?: RawInterface;
	markdown?: string;
}
export interface RawInterface {
	children: [];
}

export interface NavItemInterface {
	/** what is the name of this nav item */
	name?: string;
	/** what is the src of this link? */
	link?: string;
	/** what is the id of this element? */
	id?: string;
	/** what is the title of this nav item */
	title?: string;
	/** what is the src of this path? */
	path?: string;
	/** does this nav item have any children? */
	children?: any[];
	dropdownHeading?: any;
}

export interface FooterMenuInterface {
	externalLink?: boolean;
	submenus?: FooterMenuInterface[];
	id?: string;
	title?: string;
	path?: string;
}

export interface FooterTrademarkInterface {
	content?: string;
	image?: NewImageInterface | ImageInterface;
	title?: string;
}
