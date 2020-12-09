import React from "react"
import { Route, Switch } from "react-router-dom"
import ArticleList from "./containers/Article/ArticleListView"
import ArticleDetail from "./containers/Article/ArticleDetailView"
import ProductList from "./containers/Product/ProductListView"
import ProductDetail from "./containers/Product/ProductDetailView"
import ProductSetting from "./containers/Product/Setting/ProductSetting"
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
      <Route exact path='/products/setting' component={ProductSetting} />
      <Route exact path='/inventories/setting' component={InventorySetting} />
      <Route exact path='/supplier' component={SupplierSetting} />
      <Route exact path='/products/:productID/' component={ProductDetail} />
      <Route exact path='/login/' component={Login} />
      <Route exact path='/signup/' component={RegistrationForm} />
    </Switch>
  </div>
)

export default BaseRouter
