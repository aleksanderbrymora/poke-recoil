import { Box, Input } from '@chakra-ui/core';
import React, { ChangeEvent } from 'react';
import { useSetRecoilState } from 'recoil';
import { filterState } from '../atoms/filters';
import { capitalize } from '../utils/capitalize';

export const FilterInput: React.FC<{ name: string }> = ({ name }) => {
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
