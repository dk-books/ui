import {useCallback} from 'react';

const useZapToTop = () => {
	const zapToTop = useCallback(() => {
		if (!window) {
			return;
		}

		setTimeout(() => {
			window.scrollTo({top: 0, left: 0, behavior: 'instant' as ScrollBehavior | undefined});
		}, 10);
	}, []);

	return {zapToTop};
};

export {useZapToTop};
