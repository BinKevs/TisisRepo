import axios from "axios"
import { returnErrors } from "../Notification/messages"
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  GET_ACCOUNT_LIST,
} from "./types"

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING })
  axios
    .get("http://127.0.0.1:8000/api/auth/user", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      })
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({
        type: AUTH_ERROR,
      })
    })
}

export const login = (username, password) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  }
  const body = JSON.stringify({ username, password })
  axios
    .post("http://127.0.0.1:8000/api/auth/login", body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      })
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({
        type: LOGIN_FAIL,
      })
    })
}
export const register = ({ username, password, email }) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  }
  const body = JSON.stringify({ username, password, email })
  axios
    .post("http://127.0.0.1:8000/api/auth/register", body, config)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({
        type: REGISTER_FAIL,
      })
    })
}
export const logout = () => (dispatch, getState) => {
  axios
    .post("http://127.0.0.1:8000/api/auth/logout/", null, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: LOGOUT_SUCCESS,
      })
    })
    .catch((err) => {
      // dispatch(returnErrors(err.response.data, err.response.status))
    })
}
export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().AuthReducer.token

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  }

  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`
  }

  return config
}

const url = "http://127.0.0.1:8000/api/accounts/"
export const getAccountList = () => (dispatch, getState) => {
  axios.get(url, tokenConfig(getState)).then((res) => {
    dispatch({
      type: GET_ACCOUNT_LIST,
      payload: res.data,
    })
  })
}
