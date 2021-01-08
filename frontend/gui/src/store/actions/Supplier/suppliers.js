import axios from "axios"
import { tokenConfig } from "../../actions/Accounts/auth"
import { createMessage, returnErrors } from "../Notification/messages"
import {
  GET_SUPPLIER_LIST,
  GET_SUPPLIER,
  DELETE_SUPPLIER,
  ADD_SUPPLIER,
  UPDATE_SUPPLIER,
} from "./actionTypes"
const url = "http://127.0.0.1:8000/api/suppliers/"
export const getSupplierList = () => (dispatch, getState) => {
  axios
    .get(url, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_SUPPLIER_LIST,
        payload: res.data,
      })
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status)),
    )
}
export const getSupplier = (SupplierID) => (dispatch, getState) => {
  axios
    .get(url + SupplierID + "/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_SUPPLIER,
        payload: res.data,
      })
    })
    .catch((err) => console.log(err))
}
export const deleteSupplier = (SupplierID) => (dispatch, getState) => {
  axios
    .delete(url + SupplierID + "/", tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ message: "Supplier Deleted" }))
      dispatch({
        type: DELETE_SUPPLIER,
        payload: SupplierID,
      })
    })
    .catch((err) => console.log(err))
}
export const addSupplier = (data) => (dispatch, getState) => {
  axios
    .post(url, data, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ message: "Supplier Added" }))
      dispatch({
        type: ADD_SUPPLIER,
        payload: res.data,
      })
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status)),
    )
}
export const updateSupplier = (SupplierID, data) => (dispatch, getState) => {
  axios
    .put(url + SupplierID + "/", data, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ message: "Supplier Updated" }))
      dispatch({
        type: UPDATE_SUPPLIER,
        payload: res.data,
      })
    })
    .catch((err) => console.log(err))
}