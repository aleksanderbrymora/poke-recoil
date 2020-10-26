import { atom } from 'recoil';
import { getAllPokemon } from '../db';

interface Filters {
	experience: MinMax;
	height: MinMax;
	weight: MinMax;
	name: string;
	type: string;
}

interface MinMax {
	min: number;
	max: number;
}

const findMinMax = (stat: string): MinMax => {
	const all = getAllPokemon();
	return {
		min: all.reduce((p, c) => (p <= c[stat] ? p : c[stat]), Infinity),
		max: all.reduce((p, c) => (p >= c[stat] ? p : c[stat]), 0),
	};
};

const initial = (): Filters => {
	const experience = findMinMax('experience');
	const height = findMinMax('height');
	const weight = findMinMax('weight');
	return {
		experience,
		height,
		weight,
		name: '',
		type: '',
	};
};

export const filterState = atom({
	key: 'filterState',
	default: initial(),
});
