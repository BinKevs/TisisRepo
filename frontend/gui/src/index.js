import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './Style.css';
import './css/all.css';
const app = (
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
