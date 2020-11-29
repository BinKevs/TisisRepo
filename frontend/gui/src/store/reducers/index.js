import { combineReducers } from "redux"
import reducer from "./Authentication/auth"
import articles from "./Article/articles"
import errors from "./Errors"
import messages from "./messages"
import AuthReducer from "./Accounts/auth"
export default combineReducers({
  reducer,
  articles,
  errors,
  messages,
  AuthReducer,
})
