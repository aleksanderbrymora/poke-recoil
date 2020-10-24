import React from 'react';
import Main from './components/Main';
import Side from './components/Side';

const App = () => {
	return (
		<div className='App grid grid-cols-6 container mx-auto'>
			<Main />
			<Side />
		</div>
	);
};

export default App;
