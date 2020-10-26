import { Grid } from '@chakra-ui/core';
import React from 'react';
import Filters from './components/Filters';
import Main from './components/Main';
import Side from './components/Side';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
	return (
		<>
			<Grid
				templateColumns='2fr 5fr 2fr'
				maxW='1200px'
				mx='auto'
				py='1rem'
				px='2rem'
			>
				<Filters />
				<ThemeToggle />
				<Main />
				<Side />
			</Grid>
		</>
	);
};

export default App;
