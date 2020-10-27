export const capitalize = (input: string): string => {
	const [first, ...rest] = input.split('');
	return [first.toUpperCase(), ...rest].join('');
};
