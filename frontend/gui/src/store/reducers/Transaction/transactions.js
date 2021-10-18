import {
  GET_TRANSACTION_LIST,
  GET_TRANSACTION,
  DELETE_TRANSACTION,
  ADD_TRANSACTION,
  UPDATE_TRANSACTION,
  ADD_TRANSACTION_ITEMS,
  GET_TRANSACTION_ITEM_LIST,
  UPDATE_TRANSACTION_STATUS,
  UPDATE_TRANSACTION_ITEMS,
  ADD_REFUND,
  GET_REFUND_LIST,
  UPDATE_REFUND,
} from "../../actions/transaction/actionTypes";
const initialState = {
  transactions: [],
  transaction: {},
  transaction_items: [],
  transaction_item_list: [],
  refunds: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TRANSACTION_LIST:
      return {
        ...state,
        transactions: action.payload,
      };

    case GET_TRANSACTION:
      return {
        ...state,
        transaction: action.payload,
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };

    case UPDATE_TRANSACTION:
      return {
        ...state,
        transaction: action.payload,
      };
    case UPDATE_TRANSACTION_STATUS:
      return {
        ...state,
        transactions: [
          action.payload,
          ...state.transactions.filter(
            (items) => items.id !== action.payload.id
          ),
        ],
      };
    case UPDATE_TRANSACTION_ITEMS:
      return {
        ...state,
        transactions: [
          ...state.transactions.filter(
            (items) => items.id !== action.payload.id
          ),
          action.payload,
        ],
      };
    case GET_TRANSACTION_ITEM_LIST:
      return {
        ...state,
        transaction_item_list: action.payload,
      };
    case ADD_TRANSACTION_ITEMS:
      return {
        ...state,
        transaction_items: [...state.transaction_items, action.payload],
      };
    case ADD_REFUND:
      return {
        ...state,
        refunds: [...state.refunds, action.payload],
      };
    case GET_REFUND_LIST:
      return {
        ...state,
        refunds: action.payload,
      };
    case UPDATE_REFUND:
      return {
        ...state,
        refunds: [
          action.payload,
          ...state.refunds.filter((items) => items.id !== action.payload.id),
        ],
      };

    default:
      return state;
  }
}
