import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QUANTITY } from "./types"
export const addToCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cartReducer.cartItems.slice()
  let alreadyExists = false
  cartItems.forEach((x) => {
    if (x.product_id === product.product_id) {
      alreadyExists = true
      x.quantity++
    }
  })
  if (!alreadyExists) {
    cartItems.push({ ...product, quantity: 1 })
  }
  dispatch({
    type: ADD_TO_CART,
    payload: { cartItems },
  })
  localStorage.setItem("cartItem", JSON.stringify(cartItems))
}
export const changeCartValue = (
  changeType,
  product_id,
  product_current_value,
) => (dispatch, getState) => {
  const cartItems = getState().cartReducer.cartItems.slice()
  let alreadyExists = false

  cartItems.forEach((x) => {
    if (x.product_id === product_id) {
      alreadyExists = true
      if (changeType === "plus") x.quantity++
      else if (changeType === "minus") x.quantity--
      else if (changeType === "type") x.quantity = product_current_value
    }
  })

  dispatch({
    type: CHANGE_QUANTITY,
    payload: { cartItems },
  })
  localStorage.setItem("cartItem", JSON.stringify(cartItems))
}

export const removeFromCart = (product) => (dispatch, getState) => {
  const cartItems = getState()
    .cartReducer.cartItems.slice()
    .filter((x) => x.product_id !== product.product_id)
  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } })
  localStorage.setItem("cartItem", JSON.stringify(cartItems))
}
