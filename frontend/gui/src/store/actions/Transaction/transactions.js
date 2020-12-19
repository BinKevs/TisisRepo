import axios from "axios"
import { tokenConfig } from "../../actions/Accounts/auth"
import { createMessage, returnErrors } from "../Notification/messages"
import {
  GET_TRANSACTION_LIST,
  GET_TRANSACTION,
  DELETE_TRANSACTION,
  ADD_TRANSACTION,
  ADD_TRANSACTION_ITEMS,
  UPDATE_TRANSACTION,
} from "./actionTypes"
const url = "http://127.0.0.1:8000/api/transactions/"
export const getTransactionList = () => (dispatch, getState) => {
  axios.get(url, tokenConfig(getState)).then((res) => {
    dispatch({
      type: GET_TRANSACTION_LIST,
      payload: res.data,
    })
  })
}
export const getTransaction = (TransactionID) => (dispatch, getState) => {
  axios
    .get(url + TransactionID + "/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_TRANSACTION,
        payload: res.data,
      })
    })
    .catch((err) => console.log(err))
}
export const deleteTransaction = (TransactionID) => (dispatch, getState) => {
  axios
    .delete(url + TransactionID + "/", tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ message: "Transaction Deleted" }))
      dispatch({
        type: DELETE_TRANSACTION,
        payload: TransactionID,
      })
    })
    .catch((err) => console.log(err))
}
export const addTransactionItems = (data) => (dispatch, getState) => {
  axios
    .post(
      "http://127.0.0.1:8000/api/transactions_items/",
      data,
      tokenConfig(getState),
    )
    .then((res) => {
      dispatch(createMessage({ message: "Transaction Added" }))
      dispatch({
        type: ADD_TRANSACTION_ITEMS,
        payload: res.data,
      })
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status)),
    )
}
export const addTransaction = (data) => (dispatch, getState) => {
  axios
    .post(
      "http://127.0.0.1:8000/api/transactions/",
      data,
      tokenConfig(getState),
    )
    .then((res) => {
      dispatch(createMessage({ message: "Transaction Added" }))
      dispatch({
        type: ADD_TRANSACTION,
        payload: res.data,
      })
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status)),
    )
}
export const updateTransaction = (TransactionID, data) => (
  dispatch,
  getState,
) => {
  axios
    .put(url + TransactionID + "/", data, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ message: "Transaction Updated" }))
      dispatch({
        type: UPDATE_TRANSACTION,
        payload: res.data,
      })
    })
    .catch((err) => console.log(err))
}
