import * as React from 'react';
import type {FC, ReactNode} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {dklBtn} from '../../../utility/themes/dkl/theme';
import {efeBtn, fontColor} from '../../../utility/themes/efe/theme';
import {Icons} from '../icons';
import {Button} from '../button';

type ButtonProps = {
	repo?: string;
	/**
	 * What background color to use
	 */
	backgroundColor?: string;
	/**
	 * Button title
	 */
	label: string;
	/**
	 * Path link
	 */
	href: string;
	externalLink?: boolean;
};

type BasicModalProps = {
	repo?: string;
	buttonType?: string;
	fontColorText?: string;
	language?: string;
	buttonColour?: string;
	buttonTitle?: string;
	displayTitle?: ReactNode;
	displayMessage?: ReactNode;
	buttons?: ButtonProps[];
};

const BasicModal: FC<BasicModalProps> = ({repo, buttonType, language, buttonColour, buttonTitle, fontColorText, displayTitle, displayMessage, buttons}) => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const type = 'button';
	// Repo Button Type
	const buttonRepo = (repo: string, type: string, buttonColour: string) => {
		switch (repo) {
			case 'dkl':
				return `${dklBtn[type]} ${dklBtn[buttonColour]} `;
			case 'efe':
				return `${efeBtn[type]} ${efeBtn[buttonColour]}`;
			default:
				return 'py-3 px-6 mx-auto text-center';
		}
	};

	let buttonClass = null;
	let pickFontColor = null;
	if (buttonColour) {
		pickFontColor = fontColorText ? fontColorText : 'white';
		buttonClass = `${fontColor[pickFontColor]}`;
	}

	const backButtonStyle = buttonRepo(repo ?? '', buttonType ?? '', buttonColour ?? '');

	return (
		<div className='w-full'>
			<Button wide={true}>
				<div onClick={handleOpen} className={`${backButtonStyle} w-full uppercase cursor-pointer rounded text-18`}>
					<span className='items-center justify-center w-full block border-2 rounded-lg'>
						<span className='text-white text-18'>{language}</span>
						<span className=' w-full block leading-7'>
							<span className='text-white inline-block align-top p-0 font-bold tracking-[.6px]'></span>
							<span className='text-white font-bold inline-block align-top p-0 tracking-[.6px] text-18'>{buttonTitle}</span>
						</span>
					</span>
				</div>
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={{
					boxShadow: 24,
					position: 'absolute',
					border: '1px solid #000',
					p: 4,
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					width: 400,
					bgcolor: 'background.paper',
				}}>
					<div className='w-full grid absolute justify-items-end pr-12' onClick={handleClose}>
						<Icons icon='/images/icon-close-grey-small.png' width={10} />
					</div>
					<Typography id='modal-modal-title' variant='h6' component='h2'>
						{displayTitle}
					</Typography>
					<Typography id='modal-modal-description' sx={{mt: 2}}>
						{displayMessage}
					</Typography>
					{buttons && (
						<Typography id='modal-modal-description' sx={{mt: 2}}>
							{buttons.map((button, i) => {
								const background = buttonRepo(repo ?? '', type ?? '', button.backgroundColor ?? 'blue');
								return (
									<div key={i} className={`p-5 m-5 ${backButtonStyle} ${background}`}>
										<Button externalLink={button.externalLink} path={button.href} size={18}>{button.label}</Button>
									</div>
								);
							},
							)}
						</Typography>
					)}
				</Box>
			</Modal>
		</div>
	);
};

export {BasicModal};
