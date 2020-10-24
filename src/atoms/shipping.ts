import { atom } from 'recoil';

const initial: Shipping = 'Normal';

export const shippingState = atom({
	key: 'shippingState',
	default: initial,
});

type Shipping = 'Express' | 'Normal' | "Aliexpress'esque" | 'Pick up yourself';
