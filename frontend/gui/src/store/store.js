import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import combineReducers from "./reducers/index"
const initialState = {}
const middleware = [thunk]
const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  combineReducers,
  initialState,
  composeEnhances(applyMiddleware(...middleware)),
)
export default store
