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

export const getPokemon = (): Pokemon[] => pokemon;
