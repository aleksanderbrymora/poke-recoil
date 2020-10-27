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
import React, { ChangeEvent, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { filterState, MinMax } from '../atoms/filters';
import { capitalize } from '../utils/capitalize';

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
			{/* <pre>{JSON.stringify(filters, null, 2)}</pre> */}
			<small>This is wonky but I like it, so it stayed</small>
			<FilterInput name='name' />
			<FilterInput name='type' />
			<MinMaxSlider name='Experience' stats={filters.experience} />
			<MinMaxSlider name='Height' stats={filters.height} />
			<MinMaxSlider name='Weight' stats={filters.weight} />
		</Box>
	);
};

const FilterInput: React.FC<{ name: string }> = ({ name }) => {
	const setFilters = useSetRecoilState(filterState);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFilters((prev) => ({
			...prev,
			[name]: e.target.value,
		}));
	};

	return (
		<Box my='1rem'>
			<label htmlFor={`search-${name}`}>Search by {name}</label>
			<Input
				onChange={handleChange}
				id={`search-${name}`}
				placeholder={capitalize(name)}
				type='search	'
			/>
		</Box>
	);
};

const MinMaxSlider: React.FC<{
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

export default Filters;
