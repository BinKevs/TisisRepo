import axios from "axios"
import { tokenConfig } from "../../actions/Accounts/auth"
import { createMessage, returnErrors } from "../Notification/messages"
import {
  GET_ARTICLES_LIST,
  GET_ARTICLE,
  DELETE_ARTICLE,
  ADD_ARTICLE,
  UPDATE_ARTICLE,
} from "./actionTypes"

export const getArticlesList = () => (dispatch, getState) => {
  axios
    .get("http://127.0.0.1:8000/api/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_ARTICLES_LIST,
        payload: res.data,
      })
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status)),
    )
}
export const getArticle = (articleID) => (dispatch, getState) => {
  axios
    .get("http://127.0.0.1:8000/api/" + articleID + "/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_ARTICLE,
        payload: res.data,
      })
    })
    .catch((err) => console.log(err))
}
export const deleteArticle = (articleID) => (dispatch, getState) => {
  axios
    .delete(
      "http://127.0.0.1:8000/api/" + articleID + "/",
      tokenConfig(getState),
    )
    .then((res) => {
      dispatch(createMessage({ message: "Article Deleted" }))
      dispatch({
        type: DELETE_ARTICLE,
        payload: articleID,
      })
    })
    .catch((err) => console.log(err))
}
export const addArticle = (data) => (dispatch, getState) => {
  axios
    .post("http://127.0.0.1:8000/api/", data, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ message: "Article Added" }))
      dispatch({
        type: ADD_ARTICLE,
        payload: res.data,
      })
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status)),
    )
}
export const updateArticle = (articleID, data) => (dispatch, getState) => {
  axios
    .put(
      "http://127.0.0.1:8000/api/" + articleID + "/",
      data,
      tokenConfig(getState),
    )
    .then((res) => {
      dispatch(createMessage({ message: "Article Updated" }))
      dispatch({
        type: UPDATE_ARTICLE,
        payload: res.data,
      })
    })
    .catch((err) => console.log(err))
}
