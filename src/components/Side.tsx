import { Box } from '@chakra-ui/core';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { totalsState } from '../atoms/totals';

const Side = () => {
	const totals = useRecoilValue(totalsState);
	return (
		<Box className='col-span-2'>
			<pre>{JSON.stringify(totals, null, 2)}</pre>
		</Box>
	);
};

export default Side;
