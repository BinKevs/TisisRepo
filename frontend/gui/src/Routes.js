import React from "react"
import { Route, HashRouter as Router, Switch, Redirect } from "react-router-dom"
import ArticleList from "./containers/Article/ArticleListView"
import ArticleDetail from "./containers/Article/ArticleDetailView"
import Login from "./containers/Authentication/Login"
import RegistrationForm from "./containers/Authentication/Signup"
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
      <Route exact path='/login/' component={Login} />
      <Route exact path='/signup/' component={RegistrationForm} />
    </Switch>
  </div>
)

export default BaseRouter
