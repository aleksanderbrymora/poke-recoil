import { selector } from 'recoil';
import { getAllPokemon, Pokemon } from '../db';
import { filterState } from './filters';

const filterMinMax = (
	all: Pokemon[],
	stat: string,
	{ min, max }: { max: number; min: number },
): Pokemon[] => {
	return all.filter((p) => p[stat] < max).filter((p) => p[stat] > min);
};

// Object.defineProperty(Array.prototype, 'minMax', {
// 	value: filterMinMax,
// });

export const pokemonState = selector({
	key: 'pokemonState',
	get: ({ get }) => {
		const { experience, height, weight, name, type } = get(filterState);
		const allPokemon = getAllPokemon();
		let pokemon: Pokemon[] = [...allPokemon];
		pokemon = filterMinMax(pokemon, 'experience', experience);
		pokemon = filterMinMax(pokemon, 'height', height);
		pokemon = filterMinMax(pokemon, 'weight', weight);
		pokemon = pokemon
			.filter((p) => p.name.includes(name.toLowerCase()))
			.filter(
				(p) => p.types.filter((t) => t.includes(type.toLowerCase())).length > 0,
			);
		return pokemon;
	},
});
