import { Box, Heading, useColorMode } from '@chakra-ui/core';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { totalsState } from '../atoms/totals';
import CartItem from './CartItem';

const Side = () => {
	const totals = useRecoilValue(totalsState);
	const { colorMode } = useColorMode();
	const bgColor = { light: 'gray.500', dark: 'gray.200' };
	const color = { light: 'white', dark: 'gray.800' };
	return (
		<Box
			position='sticky'
			top='0'
			height='fit-content'
			bg={bgColor[colorMode]}
			w='100%'
			mt='1rem'
			rounded={5}
			color={color[colorMode]}
			p='1rem'
		>
			<Heading as='h2'>Subtotal: ${totals.subtotal}</Heading>
			<Heading as='h3' size='lg' mt='1rem'>
				{totals.receipt.length > 0
					? 'Currentrly in your cart:'
					: 'No items yet'}
			</Heading>
			<Box mt='2rem'>
				{totals.receipt.map((i) => (
					<CartItem item={i} />
				))}
			</Box>
			{/* <pre>{JSON.stringify(totals, null, 2)}</pre> */}
		</Box>
	);
};

export default Side;
