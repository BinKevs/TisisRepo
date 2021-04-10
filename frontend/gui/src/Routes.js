import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import ArticleList from './Junk/Article/ArticleListView';
// import ArticleDetail from './Junk/Article/ArticleDetailView';
import ProductList from './containers/Product/ProductListView';
import ReportsContainer from './containers/Reports/ReportsContainer';
import ProductDetail from './containers/Product/ProductDetailView';
import CheckOutForm from './containers/CheckoutForm/CheckoutForm';
import ProductSetting from './containers/Product/Setting/ProductSetting';
import TransactionSetting from './containers/Transaction/Setting/TransactionSetting';
import TransanctionItemsSetting from './containers/Transaction/Setting/Transaction_Items_Setting';
import CategoriesSetting from './containers/Product/CategoriesSetting/CategoriesSetting';
import InventorySetting from './containers/Inventory/Setting/InventorySetting';
import SupplierSetting from './containers/Supplier/Setting/SupplierSetting';
import Login from './containers/Accounts/Login';
import AccountSetting from './containers/Accounts/AccountSetting';
import Dashboard from './containers/Dashboard/Dashboard';

import RegistrationForm from './containers/Accounts/Signup';
import PrivateRoute from './components/common/PrivateRoute';
const BaseRouter = () => (
	<div>
		<Switch>
			{/* <PrivateRoute exact path='/articles' component={ArticleList} />
			<PrivateRoute
				exact
				path='/articles/:articleID/'
				component={ArticleDetail}
			/> */}
			<PrivateRoute exact path='/dashboard' component={Dashboard} />
			<PrivateRoute exact path='/products' component={ProductList} />
			<PrivateRoute exact path='/reports' component={ReportsContainer} />
			<PrivateRoute exact path='/checkout' component={CheckOutForm} />
			<PrivateRoute exact path='/products/setting' component={ProductSetting} />
			<PrivateRoute
				exact
				path='/categories-setting'
				component={CategoriesSetting}
			/>
			<PrivateRoute exact path='/transactions' component={TransactionSetting} />
			<PrivateRoute
				exact
				path='/transactions/items'
				component={TransanctionItemsSetting}
			/>
			<PrivateRoute exact path='/accounts/setting' component={AccountSetting} />

			<PrivateRoute
				exact
				path='/inventories/setting'
				component={InventorySetting}
			/>

			<PrivateRoute exact path='/supplier' component={SupplierSetting} />
			<PrivateRoute
				exact
				path='/products/setting/:productID/'
				component={ProductDetail}
			/>
			<Route exact path='/' component={Login} />
			<Route exact path='/login/' component={Login} />
			<Route exact path='/signup/' component={RegistrationForm} />
		</Switch>
	</div>
);

export default BaseRouter;
