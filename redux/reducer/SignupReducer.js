import { IS_SIGNUP_ERROR, IS_SIGNUP_LOADING, SIGNUP } from "../type";

const SIGNUPSTATE = {
    Loading: false,
    SIGNUP:'',
    Err:''
}
export const LoginReducer = (state = SIGNUPSTATE, action) => {
    switch (action.type) {
      case IS_SIGNUP_LOADING:
        return {
          ...state,
          Loading: action.payload,
        };
  
      case SIGNUP:
        return {
          ...state,
          SIGNUP: action.payload,
        };
  
      case IS_SIGNUP_ERROR:
        return {
          ...state,
          Err: action.payload,
        };
  
      default:
        return state;
    }
  };