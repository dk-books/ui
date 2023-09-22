import React from 'react';
import type {FC, ReactNode} from 'react';
import {Button} from '../button';
import {ButtonAndDropdown} from '../button-and-dropdown';

type DropdownLink = {
	externalLink?: boolean | undefined;
	ico?: any;
	title?: string;
	path?: string;
	icon?: {url?: string};
};

type LinksDropdownProps = {
	enabled: boolean;
	onClicked: (link: DropdownLink) => void;
	links: Array<{
		title: string;
		path: string;
	}>;
	button: ReactNode;
	repo: string;
};

const splitLinksIntoColumns = (links: DropdownLink[]): DropdownLink[][] => {
	const columnSize = 10;
	const columns: DropdownLink[][] = [];

	for (let i = 0; i < links.length; i += columnSize) {
		columns.push(links.slice(i, i + columnSize));
	}

	return columns;
};

const LinksDropdown: FC<LinksDropdownProps> = ({
	enabled = true,
	links,
	button,
	repo,
	onClicked}) => {
	let columns;
	if (links?.length) {
		[columns] = [splitLinksIntoColumns(links)];
		console.log(links);
		return (
			<ButtonAndDropdown
				enabled={enabled}
				button={button}>
				<div className='flex'>
					{columns.map((linksInColumn: DropdownLink[], columnNo: number) => (
						<div className='pl-4 pt-1' key={columnNo}>
							{linksInColumn ? linksInColumn.map(link => (
								<div
									key={link.title}
									onClick={() => {
										onClicked(link);
									}}>
									<Button
										repo={repo ? repo : 'efe'}
										externalLink={link.externalLink}
										path={link.path}
										icon={link.icon?.url}>
										{link.title}
									</Button>
								</div>
							)) : null}
						</div>
					),
					)}
				</div>
			</ButtonAndDropdown>
		);
	}

	return null;
};

export default LinksDropdown;
