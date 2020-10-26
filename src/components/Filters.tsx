import {
	Box,
	Heading,
	Slider,
	SliderFilledTrack,
	SliderThumb,
	SliderTrack,
} from '@chakra-ui/core';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { filterState } from '../atoms/filters';

const Filters = () => {
	const filters = useRecoilValue(filterState);
	return (
		<Box
			position='sticky'
			top='1rem'
			height='fit-content'
			w='100%'
			mt='1rem'
			rounded={5}
			p='1rem'
		>
			<pre>{JSON.stringify(filters, null, 2)}</pre>
			<MinMax name='Experience' stats={filters.experience} />
			<MinMax name='Height' stats={filters.height} />
			<MinMax name='Weight' stats={filters.weight} />
		</Box>
	);
};

const MinMax: React.FC<{
	stats: { min: number; max: number };
	name: string;
}> = ({ stats, name }) => {
	return (
		<Box mt='1rem'>
			<Heading size='md' as='h4'>
				{name} - {}
			</Heading>
			<Slider defaultValue={stats.min} max={stats.max} min={stats.min}>
				<SliderTrack />
				<SliderFilledTrack />
				<SliderThumb />
			</Slider>
		</Box>
	);
};

export default Filters;
