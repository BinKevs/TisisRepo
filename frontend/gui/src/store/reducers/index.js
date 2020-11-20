import { combineReducers } from "redux"
import reducer from "./auth"
import articles from "./articles"
export default combineReducers({
  reducer,
  articles,
})
