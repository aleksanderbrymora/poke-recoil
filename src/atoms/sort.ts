import { atom } from 'recoil';

export type SortBy =
	| 'popular'
	| 'name'
	| 'price'
	| 'experience'
	| 'height'
	| 'weight';

export interface Sort {
	by: SortBy;
	direction: 'asc' | 'desc';
}

export const sortState = atom<Sort>({
	key: 'sortState',
	default: { by: 'popular', direction: 'asc' },
});
