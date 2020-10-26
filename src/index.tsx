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
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import './styles.css';

const ELEMENTS_OPTIONS = {
	fonts: [
		{
			cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
		},
	],
};

const stripePromise = loadStripe(
	'pk_test_51HgROgA9TvYPVG1WgV79vAvhPxTIwqMQBIuLINJVPQjHciKtzsOXrTYMKIajTH0HQahB8vlRHKttVRD4LgQERXbh00QVhTH4zk',
);
// Use at the root of your app
ReactDOM.render(
	<React.StrictMode>
		<Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
			<RecoilRoot>
				<ThemeProvider theme={theme}>
					<ColorModeProvider>
						<CSSReset />
						<App />
					</ColorModeProvider>
				</ThemeProvider>
			</RecoilRoot>
		</Elements>
	</React.StrictMode>,
	document.getElementById('root'),
);
