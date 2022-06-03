import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'antd/dist/antd.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const getLibrary = (provider: any): Web3Provider => {
	const library = new Web3Provider(provider);
	library.pollingInterval = 12000;
	return library;
};
root.render(
	<React.StrictMode>
		<Web3ReactProvider getLibrary={getLibrary}>
			<App />
		</Web3ReactProvider>
	</React.StrictMode>
);

reportWebVitals();
