import { selector } from 'recoil';
import { getPokemonPrice, getPokemonById } from '../db';
import { cartState } from './cart';

export const totalsState = selector({
	key: 'totalsState',
	get: ({ get }) => {
		const cart = get(cartState);
		const subtotal = cart
			.map((p) => getPokemonPrice(p))
			.reduce((a, b) => a + b, 0);

		const receipt = getReceipt(cart);

		return {
			subtotal,
			receipt,
		};
	},
});

interface ReceiptItem {
	name: string;
	price: number;
}

type Receipt = ReceiptItem[];

const getReceipt = (cart: number[]): Receipt => {
	const items = {};
	cart.forEach((i) => (i in items ? items[i]++ : (items[i] = 1)));
	return Object.entries(items).map(([id, amount]) => {
		const name = getPokemonById(Number(id)).name;
		const price = getPokemonPrice(Number(id)) * Number(amount);
		return { name, price };
	});
};
