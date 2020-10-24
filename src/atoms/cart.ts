import { atom } from 'recoil';

const initial: number[] = [];

export const cartState = atom({
	key: 'pokemon',
	default: initial,
});
