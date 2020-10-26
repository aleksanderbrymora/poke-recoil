import { Box, Flex, Heading, useColorMode } from '@chakra-ui/core';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { shippingState } from '../atoms/shipping';
import { totalsState } from '../atoms/totals';
import CartItem from './CartItem';
import Shipping from './Shipping';

const Side = () => {
	const totals = useRecoilValue(totalsState);
	const shipping = useRecoilValue(shippingState);
	const { colorMode } = useColorMode();
	const bgColor = { light: 'gray.500', dark: 'red.300' };
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
			<Heading
				as='h3'
				size='lg'
				mt='1rem'
				textAlign={totals.receipt.length > 0 ? 'left' : 'center'}
			>
				{totals.receipt.length > 0
					? 'Currentrly in your cart:'
					: 'There are no items in your cart'}
			</Heading>

			{totals.receipt.length > 0 && (
				<>
					<Box mt='2rem'>
						{totals.receipt.map((i) => (
							<CartItem item={i} />
						))}
					</Box>
					<Shipping />
					<TotalsRow name='Subtotal' price={totals.subtotal} />
					<TotalsRow name='Shipping' price={shipping.price} />
					<TotalsRow name='Total' price={totals.total} size='lg' />
				</>
			)}
		</Box>
	);
};

export default Side;

const TotalsRow: React.FC<{
	name: string;
	price: number;
	size?: '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | undefined;
}> = ({ name, price, size = 'md' }) => {
	return (
		<Flex justifyContent='space-between' borderBottom='1px solid black'>
			<Heading as='h2' size={size} mt='2rem'>
				{name}
			</Heading>
			<Heading as='h2' size={size} mt='2rem'>
				${price}
			</Heading>
		</Flex>
	);
};
