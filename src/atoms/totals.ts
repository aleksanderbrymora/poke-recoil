import { selector } from 'recoil';
import { getPokemonById } from '../db';
import { cartState } from './cart';
import { shippingState } from './shipping';

export const totalsState = selector({
	key: 'totalsState',
	get: ({ get }) => {
		const cart = get(cartState);
		const shipping = get(shippingState);
		const receipt = getReceipt(cart);
		const subtotal = receipt.reduce(
			(acc, curr) => acc + curr.price * curr.amount,
			0,
		);
		const total = subtotal + shipping.price;

		return {
			total,
			subtotal,
			receipt,
		};
	},
});

export interface ReceiptItem {
	id: number;
	name: string;
	price: number;
	amount: number;
}

type Receipt = ReceiptItem[];

const getReceipt = (cart: number[]): Receipt => {
	const items = {};
	cart.forEach((i) => (i in items ? items[i]++ : (items[i] = 1)));
	return Object.entries(items).map(([id, amount]) => {
		const found = getPokemonById(Number(id));
		return {
			name: found.name,
			id: found.id,
			price: found.price!,
			amount: Number(amount),
		};
	});
};
