import { IconButton, useColorMode } from '@chakra-ui/core';
import React from 'react';

const ThemeToggle = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<IconButton
			position='absolute'
			top='10px'
			right='10px'
			zIndex={3}
			onClick={toggleColorMode}
			aria-label='Toggle current theme'
			icon={colorMode === 'light' ? 'moon' : 'sun'}
		/>
	);
};

export default ThemeToggle;
