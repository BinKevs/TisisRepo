import React, { Component } from "react"
import { loadUser } from "./store/actions/Accounts/auth"
import CustomLayout from "./containers/Layout/Layout"
import { Provider } from "react-redux"
import PrivateRoute from "./components/common/PrivateRoute"
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"
import ArticleList from "./containers/Article/ArticleListView"
import ArticleDetail from "./containers/Article/ArticleDetailView"
import Login from "./containers/Authentication/Login"
import RegistrationForm from "./containers/Authentication/Signup"
import { Provider as AlertProvider } from "react-alert"
import AlertTemplate from "react-alert-template-basic"

import store from "./store/store"

const options = {
  // you can also just use 'bottom center'
  position: "top center",
  timeout: 3000,
  // offset: "30px",
  // you can also just use 'scale'
  // transition: transitions.SCALE,
}

class App extends Component {
  componentDidMount() {
    // this.props.onTryAutoSignup()
    store.dispatch(loadUser())
  }

  render() {
    return (
      <div>
        <AlertProvider template={AlertTemplate} {...options}>
          <Provider store={store}>
            <Router>
              <CustomLayout {...this.props}>
                <Switch>
                  <PrivateRoute
                    exact
                    path='/articles'
                    component={ArticleList}
                  />
                  <PrivateRoute
                    exact
                    path='/articles/:articleID/'
                    component={ArticleDetail}
                  />
                  <Route exact path='/login/' component={Login} />
                  <Route exact path='/signup/' component={RegistrationForm} />
                </Switch>
              </CustomLayout>
            </Router>
          </Provider>
        </AlertProvider>
      </div>
    )
  }
}

// mapStateToProps, mapDispatchToProps
export default App
