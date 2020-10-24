import React from 'react';
import { getPokemon } from '../db';
import Card from './Card';

const Main = () => {
	return (
		<div className='col-span-4'>
			{getPokemon().map((p) => (
				<Card pokemon={p} />
			))}
		</div>
	);
};

export default Main;
