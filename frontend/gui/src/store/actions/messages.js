import { CREATE_MESSAGE } from "./Article/actionTypes"
import { GET_ERRORS } from "./Article/actionTypes"
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
