import { Grid } from '@chakra-ui/core';
import React from 'react';
import Main from './components/Main';
import Side from './components/Side';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
	return (
		<Grid templateColumns='5fr 1fr' maxW='1080px' mx='auto'>
			<ThemeToggle />
			<Main />
			<Side />
		</Grid>
	);
};

export default App;
