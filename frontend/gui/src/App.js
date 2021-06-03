import { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as AlertProvider } from 'react-alert';

import CustomLayout from './containers/Layout/Layout';
import AlertTemplate from 'react-alert-template-basic';
import BaseRouter from './Routes';
import store from './store/store';

const options = {
	position: 'top center',
	timeout: 3000,
};
class App extends Component {
	render() {
		return (
			<div>
				<AlertProvider template={AlertTemplate} {...options}>
					<Provider store={store}>
						<Router>
							<CustomLayout>
								<BaseRouter />
							</CustomLayout>
						</Router>
					</Provider>
				</AlertProvider>
			</div>
		);
	}
}

export default App;
