import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
// import { createStore, compose, applyMiddleware } from "redux"
// import thunk from "redux-thunk"
// import reducer from "./store/reducers/auth"

// const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = createStore(reducer, composeEnhances(applyMiddleware(thunk)))

const app = <App />
ReactDOM.render(app, document.getElementById("root"))
registerServiceWorker()
