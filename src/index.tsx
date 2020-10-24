import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { RecoilRoot } from 'recoil';
import {
	ThemeProvider,
	theme,
	CSSReset,
	ColorModeProvider,
} from '@chakra-ui/core';

// Use at the root of your app
ReactDOM.render(
	<React.StrictMode>
		<RecoilRoot>
			<ThemeProvider theme={theme}>
				<ColorModeProvider>
					<CSSReset />
					<App />
				</ColorModeProvider>
			</ThemeProvider>
		</RecoilRoot>
	</React.StrictMode>,
	document.getElementById('root'),
);
