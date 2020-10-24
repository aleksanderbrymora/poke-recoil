import { Box, Flex, Heading, IconButton } from '@chakra-ui/core';
import React from 'react';
import { useRecoilState } from 'recoil';
import { cartState } from '../atoms';
import { ReceiptItem } from '../atoms/totals';

const CartItem: React.FC<{ item: ReceiptItem }> = ({ item }) => {
	const [cart, setCart] = useRecoilState(cartState);

	const removeOne = () => {
		const copyOfCart = [...cart];
		const index = copyOfCart.findIndex((p) => p === item.id);
		copyOfCart.splice(index, 1);
		setCart(copyOfCart);
	};
	const addOne = () => {
		setCart((prevCart) => [...prevCart, item.id]);
	};

	return (
		<Flex
			mt='1rem'
			justifyContent='space-between'
			alignItems='center'
			borderBottom='1px solid black'
			p='0.5rem 1rem'
		>
			<Flex alignItems='center'>
				<Heading as='h4' size='md'>
					{item.name} x{item.amount}
				</Heading>
				<IconButton
					onClick={removeOne}
					icon='minus'
					aria-label='remove one of this item'
				/>
				<IconButton
					onClick={addOne}
					icon='add'
					aria-label='add more of this item'
				/>
			</Flex>
			<Heading as='h4' size='md'>
				${item.price}
			</Heading>
		</Flex>
	);
};

export default CartItem;
