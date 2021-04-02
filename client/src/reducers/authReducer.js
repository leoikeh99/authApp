import {
  AUTH,
  AUTH_FAIL,
  GET_USER,
  GET_USER_FAIL,
  SET_LOADER,
  SET_LOADER2,
} from "../actions/types";

const initialState = {
  loader: false,
  loader2: true,
  status: null,
  token: localStorage.getItem("token"),
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        loader: false,
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case AUTH_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        loader: false,
        user: null,
        token: null,
        error: { msg: action.payload },
      };

    case GET_USER_FAIL:
      localStorage.removeItem("token");
      document.cookie = "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      return {
        ...state,
        loader2: false,
        user: null,
        token: null,
        loader: false,
      };

    case SET_LOADER:
      return {
        ...state,
        loader: true,
      };

    case SET_LOADER2:
      return {
        ...state,
        loader2: true,
      };

    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
