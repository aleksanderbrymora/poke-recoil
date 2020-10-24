import { atom } from 'recoil';

export const options: { name: Shipping; price: number }[] = [
	{ name: "Aliexpress'esque", price: 2 },
	{ name: 'Express', price: 20 },
	{ name: 'Pick up yourself', price: 0 },
	{ name: 'Normal', price: 10 },
];

export type Shipping =
	| 'Express'
	| 'Normal'
	| "Aliexpress'esque"
	| 'Pick up yourself';

type ShippingType = { name: Shipping; price: number };

const initial = (): ShippingType => options[2];

export const shippingState = atom({
	key: 'shippingState',
	default: initial(),
});
