import axios from "axios"
import { tokenConfig } from "../../actions/Accounts/auth"
import { createMessage, returnErrors } from "../Notification/messages"
import {
  GET_INVENTORY_LIST,
  GET_INVENTORY,
  DELETE_INVENTORY,
  ADD_INVENTORY,
  UPDATE_INVENTORY,
} from "./actionTypes"
const url = "http://127.0.0.1:8000/api/inventories"
export const getInventoryList = () => (dispatch, getState) => {
  axios
    .get(url + "?ordering=-created_at", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_INVENTORY_LIST,
        payload: res.data,
      })
    })
}
export const getInventory = (InventoryID) => (dispatch, getState) => {
  axios
    .get(url + InventoryID + "/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_INVENTORY,
        payload: res.data,
      })
    })
    .catch((err) => console.log(err))
}
export const deleteInventory = (InventoryID) => (dispatch, getState) => {
  axios
    .delete(url + InventoryID + "/", tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ message: "Inventory Deleted" }))
      dispatch({
        type: DELETE_INVENTORY,
        payload: InventoryID,
      })
    })
    .catch((err) => console.log(err))
}
export const addInventory = (data) => (dispatch, getState) => {
  axios
    .post(url, data, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ message: "Inventory Added" }))
      dispatch({
        type: ADD_INVENTORY,
        payload: res.data,
      })
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status)),
    )
}
export const updateInventory = (InventoryID, data) => (dispatch, getState) => {
  axios
    .put(url + InventoryID + "/", data, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ message: "Inventory Updated" }))
      dispatch({
        type: UPDATE_INVENTORY,
        payload: res.data,
      })
    })
    .catch((err) => console.log(err))
}
