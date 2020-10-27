import { Box, Flex, IconButton, Select } from '@chakra-ui/core';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { filterState } from '../atoms/filters';
import { SortBy, sortState } from '../atoms/sort';
import { capitalize } from '../utils/capitalize';
import { FilterInput } from './FilterInput';
import { MinMaxSlider } from './MinMaxSlider';

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
			<SortOptions />
			<FilterInput name='name' />
			<FilterInput name='type' />
			<MinMaxSlider name='Price' stats={filters.price} />
			<MinMaxSlider name='Experience' stats={filters.experience} />
			<MinMaxSlider name='Height' stats={filters.height} />
			<MinMaxSlider name='Weight' stats={filters.weight} />
		</Box>
	);
};

const SortOptions = () => {
	const [sortVal, setSort] = useRecoilState(sortState);
	const options: SortBy[] = ['name', 'price', 'experience', 'height', 'weight'];

	const handleSortTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const newVal: SortBy = e.target.value as SortBy;
		if (options.includes(newVal)) {
			setSort((prev) => ({ ...prev, by: newVal }));
		}
	};

	const handleDirectionToggle = () => {
		setSort((prev) => ({
			...prev,
			direction: prev.direction === 'asc' ? 'desc' : 'asc',
		}));
	};

	return (
		<Box mt='1rem'>
			<label htmlFor='sorting'>Sort by</label>
			<Flex>
				<Select
					onChange={handleSortTypeChange}
					id='sorting'
					variant='filled'
					placeholder='Select option'
					value={sortVal.by}
				>
					{options.map((o) => (
						<option value={o}>{capitalize(o)}</option>
					))}
				</Select>
				<IconButton
					onClick={handleDirectionToggle}
					icon={sortVal.direction === 'asc' ? 'triangle-down' : 'triangle-up'}
					aria-label='change sort direction'
				/>
			</Flex>
		</Box>
	);
};

export default Filters;
