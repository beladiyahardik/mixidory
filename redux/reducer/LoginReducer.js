import { IS_LOGIN_LOADING, LOGIN, IS_LOGIN_ERROR, IS_LOGIN } from "../type";
const LOGINSTATE = {
  Loading: false,
  LOGIN: "",
  Err: "",
};

const isLogin = false;

export const isLoginReducer = (state = isLogin, action) => {
  switch (action.type) {
    case IS_LOGIN:
      return {
        ...state,
        isLogin: action.payload,
      };
    default:
      return state;
  }
};

export const LoginReducer = (state = LOGINSTATE, action) => {
  switch (action.type) {
    case IS_LOGIN_LOADING:
      return {
        ...state,
        Loading: action.payload,
      };

    case LOGIN:
      return {
        ...state,
        LOGIN: action.payload,
      };

    case IS_LOGIN_ERROR:
      return {
        ...state,
        Err: action.payload,
      };

    default:
      return state;
  }
};
