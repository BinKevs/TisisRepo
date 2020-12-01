import { CREATE_MESSAGE, GET_ERRORS } from "../Notification/actionTypes"
export const createMessage = (msg) => {
  return {
    type: CREATE_MESSAGE,
    payload: msg,
  }
}

export const returnErrors = (msg, status) => {
  return {
    type: GET_ERRORS,
    payload: {
      msg,
      status,
    },
  }
}
