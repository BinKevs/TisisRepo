import axios from "axios"
import {
  GET_ARTICLES_LIST,
  GET_ARTICLE,
  DELETE_ARTICLE,
  ADD_ARTICLE,
  UPDATE_ARTICLE,
} from "./actionTypes"

export const getArticlesList = () => (dispatch) => {
  axios
    .get("http://127.0.0.1:8000/api/")
    .then((res) => {
      dispatch({
        type: GET_ARTICLES_LIST,
        payload: res.data,
      })
    })
    .catch((err) => console.log(err))
}
export const getArticle = (articleID) => (dispatch) => {
  const get_url = "http://127.0.0.1:8000/api/" + articleID + "/"
  axios({ method: "get", url: get_url })
    .then((res) => {
      dispatch({
        type: GET_ARTICLE,
        payload: res.data,
      })
    })
    .catch((err) => console.log(err))
}
export const deleteArticle = (articleID) => (dispatch) => {
  const get_url = "http://127.0.0.1:8000/api/" + articleID + "/"
  axios({ method: "delete", url: get_url })
    .then((res) => {
      dispatch({
        type: DELETE_ARTICLE,
        payload: articleID,
      })
    })
    .catch((err) => console.log(err))
}
export const addArticle = (data) => (dispatch) => {
  axios({
    method: "post",
    url: "http://127.0.0.1:8000/api/",
    data,
  })
    .then((res) => {
      dispatch({
        type: ADD_ARTICLE,
        payload: res.data,
      })
    })
    .catch((err) => console.log(err))
}
export const updateArticle = (articleID, data) => (dispatch) => {
  const put_url = "http://127.0.0.1:8000/api/" + articleID + "/"
  axios({ method: "put", url: put_url, data })
    .then((res) => {
      dispatch({
        type: UPDATE_ARTICLE,
        payload: res.data,
      })
    })
    .catch((err) => console.log(err))
}
