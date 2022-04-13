import axios from "axios";
import { GET_ALL_POST_API } from "../../config/API";
import {
  GET_ALL_POST,
  IS_GET_ALL_POST_ERROR,
  IS_GET_ALL_POST_LOADING,
  IS_LOADING,
} from "../type";

export const GetAllPostAction = (username) => async (dispatch) => {
  try {
    dispatch({
      type: IS_LOADING,
      payload: true,
    });

    dispatch({
      type: IS_GET_ALL_POST_LOADING,
      payload: true,
    });

    await axios.post(`${GET_ALL_POST_API}`, username).then((res) => {
      dispatch({
        type: GET_ALL_POST,
        payload: res.data,
      });
    });

    dispatch({
      type: IS_GET_ALL_POST_LOADING,
      payload: false,
    });

    dispatch({
      type: IS_LOADING,
      payload: false,
    });
  } catch (err) {
    dispatch({
      type: IS_GET_ALL_POST_ERROR,
      payload: err,
    });
    dispatch({
      type: IS_GET_ALL_POST_LOADING,
      payload: false,
    });

    dispatch({
      type: IS_LOADING,
      payload: false,
    });
  }
};
