import { atom } from 'recoil';
import { getAllPokemon } from '../db';

interface Filters {
	experience: MinMax;
	height: MinMax;
	weight: MinMax;
	price: MinMax;
	name: string;
	type: string;
}

export interface MinMax {
	min: {
		original: number;
		current: number;
	};
	max: {
		original: number;
		current: number;
	};
}

const findMinMax = (stat: string) => {
	const all = getAllPokemon();
	const calcs = {
		min: all.reduce((p, c) => (p <= c[stat] ? p : c[stat]), Infinity),
		max: all.reduce((p, c) => (p >= c[stat] ? p : c[stat]), 0),
	};
	return {
		min: {
			original: calcs.min,
			current: calcs.min,
		},
		max: {
			original: calcs.max,
			current: calcs.max,
		},
	};
};

const initial = (): Filters => {
	const experience = findMinMax('experience');
	const height = findMinMax('height');
	const weight = findMinMax('weight');
	const price = findMinMax('price');
	return {
		experience,
		height,
		weight,
		price,
		name: '',
		type: '',
	};
};

export const filterState = atom({
	key: 'filterState',
	default: initial(),
});
