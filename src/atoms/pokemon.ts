import { selector } from 'recoil';
import { getAllPokemon, Pokemon } from '../db';
import { filterState, MinMax } from './filters';
import { SortBy, sortState } from './sort';

class FilteredPokemon {
	private pokemon: Pokemon[];
	constructor() {
		this.pokemon = getAllPokemon();
	}
	sortBy(by: SortBy, direction: 'asc' | 'desc') {
		if (by === 'popular' || by === undefined) return this;
		if (by === 'name') {
			this.pokemon = this.pokemon.sort((a, b) => {
				return (
					(direction === 'asc' ? 1 : -1) * ('' + a[by]).localeCompare(b[by])
				);
			});
		} else {
			this.pokemon = this.pokemon.sort((a, b) => {
				return (direction === 'asc' ? 1 : -1) * (a[by]! - b[by]!);
			});
		}
		return this;
	}
	filterMinMax(stat: string, { min, max }: MinMax) {
		this.pokemon = this.pokemon
			.filter((p) => p[stat] < max.current)
			.filter((p) => p[stat] > min.current);
		return this;
	}
	filterByName(name: string) {
		if (name === '') return this;
		this.pokemon = this.pokemon.filter((p) =>
			p.name.includes(name.toLowerCase()),
		);
		return this;
	}
	filterByType(type: string) {
		if (type === '') return this;
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
		const { experience, height, weight, name, type, price } = get(filterState);
		const { by, direction } = get(sortState);
		const pokemon = new FilteredPokemon();
		return pokemon
			.filterMinMax('experience', experience)
			.filterMinMax('height', height)
			.filterMinMax('weight', weight)
			.filterMinMax('price', price)
			.filterByName(name)
			.filterByType(type)
			.sortBy(by, direction)
			.getFiltered();
	},
});
