import { Box, Heading, useColorMode } from '@chakra-ui/core';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { totalsState } from '../atoms/totals';
import { ItemsSumary } from './ItemsSumary';

const Side = () => {
	const totals = useRecoilValue(totalsState);
	const { colorMode } = useColorMode();
	const bgColor = { light: 'gray.500', dark: 'red.300' };
	const color = { light: 'white', dark: 'gray.800' };
	return (
		<Box
			position='sticky'
			top='1rem'
			height='fit-content'
			bg={bgColor[colorMode]}
			w='100%'
			mt='1rem'
			rounded={5}
			color={color[colorMode]}
			p='1rem'
		>
			<Heading
				as='h3'
				size='lg'
				m='1rem'
				textAlign={totals.receipt.length > 0 ? 'left' : 'center'}
			>
				{totals.receipt.length > 0
					? 'Currently in your cart:'
					: 'There are no items in your cart'}
			</Heading>
			{totals.receipt.length > 0 && <ItemsSumary />}
		</Box>
	);
};

export default Side;
