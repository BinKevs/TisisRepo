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
  GET_ACCOUNT,
  GET_ACTIVITY_LOG_LIST,
  GET_ATTENDANCE_LOG_LIST,
  ADD_ACCOUNT,
  UPDATE_ACCOUNT,
} from "../../actions/account/types";
const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
  addresses: [],
  contact_numbers: [],
  is_superuser: null,
  logout: false,
  accounts: [],
  account: {},
  activity_log: [],
  attendance_log: [],
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      console.log(action.payload);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
        is_superuser: action.payload.is_superuser,
      };
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case ADD_ACCOUNT:
      return {
        ...state,
        accounts: [action.payload, ...state.accounts],
      };
    case UPDATE_ACCOUNT:
      return {
        ...state,
        accounts: [action.payload, ...state.accounts],
      };
    case USER_LOADED:
      return {
        ...state,
        user: action.payload.user,
        addresses: action.payload.address,
        contact_numbers: action.payload.contact_number,
        isAuthenticated: true,
        isLoading: false,
        is_superuser: action.payload.user.is_superuser,
      };
    case GET_ACCOUNT_LIST:
      return {
        ...state,
        accounts: action.payload,
      };
    case GET_ACCOUNT:
      return {
        ...state,
        account: action.payload,
      };
    case GET_ACTIVITY_LOG_LIST:
      return {
        ...state,
        activity_log: action.payload,
      };
    case GET_ATTENDANCE_LOG_LIST:
      return {
        ...state,
        attendance_log: action.payload,
      };
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        logout: true,
        is_superuser: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export default AuthReducer;
