import { Grid } from '@chakra-ui/core';
import React from 'react';
import { useRecoilValue } from 'recoil';
// import { cartState } from './atoms';
import Main from './components/Main';
import Side from './components/Side';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
	// const pokemon = useRecoilValue(cartState);
	return (
		<>
			{/* <pre>{JSON.stringify(pokemon, null, 2)}</pre> */}
			<Grid
				templateColumns='5fr 2fr'
				maxW='1200px'
				mx='auto'
				py='1rem'
				px='2rem'
			>
				<ThemeToggle />
				<Main />
				<Side />
			</Grid>
		</>
	);
};

export default App;
