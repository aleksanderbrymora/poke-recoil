import pokemon from './pokemon.json';

type stat = {
	value?: number;
	image: string;
};

export type Pokemon = {
	id: number;
	name: string;
	image: string;
	abilities: {
		name: string;
		image: string;
	}[];
	price: number;
	experience: number;
	height: number;
	weight: number;
	stats: {
		hp: stat;
		attack: stat;
		defense: stat;
		specialAttack: stat;
		specialDefense: stat;
		speed: stat;
	};
	types: string[];
};

export const getAllPokemon = (): Pokemon[] =>
	pokemon.map((p) => ({ ...p, price: p.abilities.length * p.experience }));
export const getPokemonById = (id: number): Pokemon =>
	getAllPokemon().find((p) => p.id === id)!;
// export const getPokemonPrice = (id: number): number => {
// 	const p = getPokemonById(id);
// 	const price = p.abilities.length * p.experience;
// 	return price;
// };
