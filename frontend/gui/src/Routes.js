import React from "react"
import { Route, Switch } from "react-router-dom"
import ArticleList from "./containers/Article/ArticleListView"
import ArticleDetail from "./containers/Article/ArticleDetailView"
import ProductList from "./containers/Product/ProductListView"
import ReportsContainer from "./containers/Reports/ReportsContainer"
import ProductDetail from "./containers/Product/ProductDetailView"
import Checkout from "./containers/CheckoutForm/CheckoutForm"
import ProductSetting from "./containers/Product/Setting/ProductSetting"
import TransactionSetting from "./containers/Transaction/Setting/TransactionSetting"
import TransanctionItemsSetting from "./containers/Transaction/Setting/Transaction_Items_Setting"

import InventorySetting from "./containers/Inventory/Setting/InventorySetting"
import SupplierSetting from "./containers/Supplier/Setting/SupplierSetting"
import Login from "./containers/Accounts/Login"
import RegistrationForm from "./containers/Accounts/Signup"
import PrivateRoute from "./components/common/PrivateRoute"
const BaseRouter = () => (
  <div>
    <Switch>
      <PrivateRoute exact path='/articles' component={ArticleList} />
      <PrivateRoute
        exact
        path='/articles/:articleID/'
        component={ArticleDetail}
      />
      <Route exact path='/products' component={ProductList} />
      <Route exact path='/reports' component={ReportsContainer} />
      <Route exact path='/checkout' component={Checkout} />
      <Route exact path='/products/setting' component={ProductSetting} />
      <Route exact path='/transactions' component={TransactionSetting} />
      <Route
        exact
        path='/transactions/items'
        component={TransanctionItemsSetting}
      />
      <Route exact path='/inventories/setting' component={InventorySetting} />
      <Route exact path='/supplier' component={SupplierSetting} />
      <Route exact path='/products/:productID/' component={ProductDetail} />
      <Route exact path='/login/' component={Login} />
      <Route exact path='/signup/' component={RegistrationForm} />
    </Switch>
  </div>
)

export default BaseRouter
