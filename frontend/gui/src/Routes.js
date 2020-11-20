import React from "react"
import { Route } from "react-router-dom"
import ArticleList from "./containers/Article/ArticleListView"
import ArticleDetail from "./containers/Article/ArticleDetailView"
import Login from "./containers/Authentication/Login"
import RegistrationForm from "./containers/Authentication/Signup"

const BaseRouter = () => (
  <div>
    <Route exact path='/' component={ArticleList} />
    <Route exact path='/articles/:articleID/' component={ArticleDetail} />
    <Route exact path='/login/' component={Login} />
    <Route exact path='/signup/' component={RegistrationForm} />
  </div>
)

export default BaseRouter
