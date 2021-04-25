import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../src/Style.css';
import '../src/css/all.css';
const app = <App />;
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
