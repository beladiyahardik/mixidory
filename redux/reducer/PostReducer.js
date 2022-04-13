import {
  GET_ALL_POST,
  IS_GET_ALL_POST_ERROR,
  IS_GET_ALL_POST_LOADING,
} from "../type";

const post = {
  LOADING: false,
  POST: [],
  ERROR: "",
};
export const GetAllPostReducer = (state = post, action) => {
  switch (action.type) {
    case IS_GET_ALL_POST_LOADING:
      return {
        ...state,
        LOADING: action.payload,
      };
    case GET_ALL_POST:
      return {
        ...state,
        POST: action.payload,
      };
    case IS_GET_ALL_POST_ERROR:
      return {
        ...state,
        ERROR: action.payload,
      };
    default:
      return state;
  }
};
