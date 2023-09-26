import React from 'react';
import type {FC} from 'react';

type CopyComponentProps = {
	children?: JSX.Element;
};

const CopyComponent: FC<CopyComponentProps> = ({
	children,
}) => (
	<>
		<div>
			{children}
		</div>
	</>
);

export {CopyComponent};
