import { combineReducers } from "redux"
import reducer from "./Authentication/auth"
import articles from "./Article/articles"
export default combineReducers({
  reducer,
  articles,
})
