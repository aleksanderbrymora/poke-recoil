import { Box, Flex, Heading, Image, useColorMode } from '@chakra-ui/core';
import React from 'react';
import { Pokemon } from '../db';

interface Props {
	pokemon: Pokemon;
}

const Card: React.FC<Props> = ({ pokemon: { image, name, abilities } }) => {
	const { colorMode } = useColorMode();
	const bgColor = { light: 'gray.500', dark: 'gray.200' };
	const color = { light: 'white', dark: 'gray.800' };
	return (
		<Box m={5} bg={bgColor[colorMode]} rounded={5} shadow='5px' minH={250}>
			<Flex>
				<Image src={image} w='60%' marginLeft={-10} marginTop={-10} />
				<Heading as='h1' size='sm' color={color[colorMode]} mt={5}>
					{name.toUpperCase()}
				</Heading>
			</Flex>
		</Box>
	);
};

export default Card;
