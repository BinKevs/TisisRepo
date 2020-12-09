import { combineReducers } from "redux"
import articles from "./Article/articles"
import products from "./Product/products"
import inventories from "./Inventory/inventories"
import suppliers from "./Supplier/suppliers"
import errors from "./Notification/Errors"
import messages from "./Notification/messages"
import AuthReducer from "./Accounts/auth"
import { cartReducer } from "./Cart/cartReducers"
export default combineReducers({
  articles,
  products,
  suppliers,
  errors,
  messages,
  AuthReducer,
  cartReducer,
  inventories,
})
