import {useState} from 'react';

function useQuery<Tdata>(): [Tdata | undefined] {
	const [data] = useState<Tdata>();
	return [data];
}

export default useQuery;
