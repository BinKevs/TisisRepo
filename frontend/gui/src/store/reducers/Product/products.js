import {
  GET_PRODUCT_LIST,
  GET_PRODUCT,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
} from "../../actions/Product/actionTypes"
const initialState = {
  products: [],
  product: {},
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return {
        ...state,
        products: action.payload,
      }
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      }
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload,
        ),
      }
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      }
    case UPDATE_PRODUCT:
      return {
        ...state,
        product: action.payload,
      }
    default:
      return state
  }
}
