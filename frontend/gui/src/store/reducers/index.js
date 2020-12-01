import { combineReducers } from "redux"
import articles from "./Article/articles"
import products from "./Product/products"
import errors from "./Notification/Errors"
import messages from "./Notification/messages"
import AuthReducer from "./Accounts/auth"
export default combineReducers({
  articles,
  products,
  errors,
  messages,
  AuthReducer,
})
