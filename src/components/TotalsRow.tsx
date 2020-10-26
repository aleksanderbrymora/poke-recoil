import { Flex, Heading } from '@chakra-ui/core';
import React from 'react';

export const TotalsRow: React.FC<{
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
