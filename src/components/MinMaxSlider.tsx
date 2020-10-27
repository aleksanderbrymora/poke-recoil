import {
	Box,
	Flex,
	Heading,
	Input,
	Slider,
	SliderFilledTrack,
	SliderThumb,
	SliderTrack,
} from '@chakra-ui/core';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { filterState, MinMax } from '../atoms/filters';

export const MinMaxSlider: React.FC<{
	stats: MinMax;
	name: string;
}> = ({ stats, name }) => {
	const sliderValues = { ...stats };
	const setFilters = useSetRecoilState(filterState);

	const [focus, setFocus] = useState<'min' | 'max'>('min');

	const handleChange = (val: number) => {
		setFilters((prev) => {
			const prevStat: MinMax = prev[name.toLowerCase()];
			// todo add a blocking function that checks that minimum goes over max
			return {
				...prev,
				[name.toLowerCase()]: {
					...prevStat,
					[focus]: {
						...prevStat[focus],
						current: val,
					},
				},
			};
		});
	};

	return (
		<Box mt='1rem'>
			<Flex justifyContent='space-between'>
				<Heading size='md' as='h4'>
					{name}
				</Heading>
				<Flex w='10rem'>
					<Input
						value={stats.min.current}
						placeholder='min'
						size='sm'
						mx='1rem'
						onFocus={() => setFocus('min')}
						min={stats.min.original}
						max={stats.max.current}
						type='number'
						onChange={(e) => handleChange(e.target.value)}
					/>
					<Input
						value={stats.max.current}
						placeholder='max'
						size='sm'
						onFocus={() => setFocus('max')}
						type='number'
						onChange={(e) => handleChange(e.target.value)}
					/>
				</Flex>
			</Flex>
			<Slider
				onChange={handleChange}
				defaultValue={stats[focus].current}
				max={sliderValues.max.original}
				min={sliderValues.min.original}
				value={stats[focus].current}
			>
				<SliderTrack />
				<SliderFilledTrack />
				<SliderThumb />
			</Slider>
		</Box>
	);
};
