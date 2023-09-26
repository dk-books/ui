import {useEffect, useState} from 'react';
import {useZapToTop} from '../use-zap-to-top';

function useQuery<Tdata>(query: string): [Tdata | undefined] {
	const [data, setData] = useState<Tdata>();
	const {zapToTop} = useZapToTop();

	return [data];
}

export default useQuery;
