import {
  GET_TRANSACTION_LIST,
  GET_TRANSACTION,
  DELETE_TRANSACTION,
  ADD_TRANSACTION,
  UPDATE_TRANSACTION,
  ADD_TRANSACTION_ITEMS,
} from "../../actions/Transaction/actionTypes"
const initialState = {
  transactions: [],
  transaction: {},
  transaction_items: [],
  get_transaction: {},
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TRANSACTION_LIST:
      return {
        ...state,
        transactions: action.payload,
      }
    case GET_TRANSACTION:
      return {
        ...state,
        transaction: action.payload,
      }
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload,
        ),
      }
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
        get_transaction: action.payload,
      }
    case ADD_TRANSACTION_ITEMS:
      return {
        ...state,
        transaction_items: [...state.transaction_items, action.payload],
      }
    case UPDATE_TRANSACTION:
      return {
        ...state,
        transaction: action.payload,
      }
    default:
      return state
  }
}
