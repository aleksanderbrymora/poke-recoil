import { selector } from 'recoil';
import { getAllPokemon, Pokemon } from '../db';
import { filterState, MinMax } from './filters';

class FilteredPokemon {
	private pokemon: Pokemon[];
	constructor() {
		this.pokemon = getAllPokemon();
	}
	filterMinMax(stat: string, { min, max }: MinMax) {
		this.pokemon = this.pokemon
			.filter((p) => p[stat] < max.current)
			.filter((p) => p[stat] > min.current);
		return this;
	}
	filterByName(name: string) {
		this.pokemon = this.pokemon.filter((p) =>
			p.name.includes(name.toLowerCase()),
		);
		return this;
	}
	filterByType(type: string) {
		this.pokemon = this.pokemon.filter(
			(p) => p.types.filter((t) => t.includes(type.toLowerCase())).length > 0,
		);
		return this;
	}
	getFiltered(): Pokemon[] {
		return this.pokemon;
	}
	report() {
		console.log(this.pokemon);
	}
}

export const pokemonState = selector({
	key: 'pokemonState',
	get: ({ get }) => {
		const { experience, height, weight, name, type } = get(filterState);
		const pokemon = new FilteredPokemon();
		return pokemon
			.filterMinMax('experience', experience)
			.filterMinMax('height', height)
			.filterMinMax('weight', weight)
			.filterByName(name)
			.filterByType(type)
			.getFiltered();
	},
});
