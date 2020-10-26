import {
	Box,
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from '@chakra-ui/core';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { shippingState } from '../atoms/shipping';
import { totalsState } from '../atoms/totals';
import CartItem from './CartItem';
import Shipping from './Shipping';
import { CheckoutForm } from './Stripe';
import { TotalsRow } from './TotalsRow';

export const ItemsSumary: React.FC = () => {
	const totals = useRecoilValue(totalsState);
	const shipping = useRecoilValue(shippingState);

	return (
		<>
			<Box mt='2rem'>
				{totals.receipt.map((i) => (
					<CartItem key={i.id} item={i} />
				))}
			</Box>
			<Shipping />
			<TotalsRow name='Subtotal' price={totals.subtotal} />
			<TotalsRow name='Shipping' price={shipping.price} />
			<TotalsRow name='Total' price={totals.total} size='lg' />
			<PayMe />
		</>
	);
};

const PayMe: React.FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (stripe && elements) {
			try {
				await stripe.createPaymentMethod({
					type: 'card',
					card: elements.getElement(CardElement)!,
				});
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<>
			<Button onClick={onOpen} m='auto' display='block' my='1rem' size='lg'>
				Pay me pls
			</Button>

			<Modal isOpen={isOpen} onClose={onClose} size='xl'>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Payment</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<CheckoutForm />
					</ModalBody>
				</ModalContent>
				<ModalFooter mb='1rem' />
			</Modal>
		</>
	);
};
