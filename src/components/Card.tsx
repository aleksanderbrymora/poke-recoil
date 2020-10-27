import {
	Box,
	Flex,
	Heading,
	IconButton,
	Image,
	useColorMode,
} from '@chakra-ui/core';
import React from 'react';
import { Pokemon } from '../db';
import { cartState } from '../atoms/cart';
import { useRecoilState } from 'recoil';
import { capitalize } from '../utils/capitalize';

interface Props {
	pokemon: Pokemon;
}

const Card: React.FC<Props> = ({ pokemon }) => {
	const { colorMode } = useColorMode();
	const [pokemons, setPokemons] = useRecoilState(cartState);

	const addPokemonToCart = () => {
		const newList = [...pokemons, pokemon.id];
		setPokemons(newList);
	};

	const bgColor = { light: 'gray.500', dark: 'gray.200' };
	const color = { light: 'white', dark: 'gray.800' };
	const { name, image } = pokemon;

	return (
		<Box
			m={5}
			bg={bgColor[colorMode]}
			rounded={5}
			shadow='5px'
			minH={150}
			p='0.5rem'
		>
			<Flex>
				<Image src={image} w='60%' marginLeft={-10} marginTop={-10} />
				<Heading as='h1' size='sm' color={color[colorMode]} mt={5}>
					{capitalize(name)}
				</Heading>
			</Flex>
			<Heading as='h2' size='sm' textAlign='center' color={color[colorMode]}>
				Price ${pokemon.price!}
			</Heading>
			<IconButton
				color={color[colorMode]}
				bg={bgColor[colorMode]}
				onClick={addPokemonToCart}
				icon='add'
				aria-label='Add to cart'
				display='block'
				m='auto'
			/>
		</Box>
	);
};

export default Card;
