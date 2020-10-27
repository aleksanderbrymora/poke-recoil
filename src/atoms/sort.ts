import { atom } from 'recoil';

interface Sort {
	by: '' | 'name' | 'price' | 'experience' | 'height' | 'weight';
	direction: 'asc' | 'desc';
}

export const sortState = atom<Sort>({
	key: 'sortState',
	default: { by: '', direction: 'asc' },
});
