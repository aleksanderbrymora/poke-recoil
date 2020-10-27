import { SimpleGrid } from '@chakra-ui/core';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { pokemonState } from '../atoms/pokemon';
import Card from './Card';

const Main = () => {
	const pokemon = useRecoilValue(pokemonState);
	return (
		<>
			<SimpleGrid minChildWidth={250} spacing={5}>
				{pokemon.map((p) => (
					<Card key={p.id} pokemon={p} />
				))}
			</SimpleGrid>
		</>
	);
};

export default Main;
