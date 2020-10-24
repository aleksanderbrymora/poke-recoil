import { Box, Grid, SimpleGrid } from '@chakra-ui/core';
import React from 'react';
import { getPokemon } from '../db';
import Card from './Card';

const Main = () => {
	return (
		<SimpleGrid minChildWidth={250} spacing={5}>
			{getPokemon().map((p) => (
				<Card key={p.id} pokemon={p} />
			))}
		</SimpleGrid>
	);
};

export default Main;
