import type {ImageInterface,	NewImageInterface} from '../';

export type FooterInterface = {
	type?: any;
	navItems?: NavItemInterface[];
	trademark?: FooterTrademarkInterface;
	logo?: NewImageInterface;
	title?: string;
	menu?: FooterMenuInterface;
	body?: TrademarkContentInterface;
}

export type TrademarkContentInterface = {
	html: string;
	text: string;
	raw?: RawInterface;
	markdown?: string;
}
export interface RawInterface {
	children: [];
}

export type NavItemInterface = {
	/** What is the name of this nav item */
	name?: string;
	/** What is the src of this link? */
	link?: string;
	/** What is the id of this element? */
	id?: string;
	/** What is the title of this nav item */
	title?: string;
	/** What is the src of this path? */
	path?: string;
	/** Does this nav item have any children? */
	children?: any[];
	dropdownHeading?: any;
}

export type FooterMenuInterface = {
	externalLink?: boolean;
	submenus?: FooterMenuInterface[];
	id?: string;
	title?: string;
	path?: string;
}

export type FooterTrademarkInterface = {
	content?: string;
	image?: NewImageInterface | ImageInterface;
	title?: string;
}
