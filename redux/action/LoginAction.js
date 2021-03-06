import {
  IS_LOADING,
  IS_LOGIN,
  IS_LOGIN_ERROR,
  IS_LOGIN_LOADING,
  LOGIN,
} from "../type";
import axios from "axios";
import { LOGIN_API } from "../../config/API";
import { Auth, KEY } from "../../config/auth";

export const isLoginAction = (OBJ) => async (dispatch) => {
  dispatch({
    type: IS_LOGIN,
    payload: OBJ,
  });
};

export const LoginAction = (OBJ) => async (dispatch) => {
  try {
    dispatch({
      type: IS_LOADING,
      payload: true,
    });

    dispatch({
      type: IS_LOGIN_LOADING,
      payload: true,
    });

    await axios.post(LOGIN_API, OBJ).then((res) => {
      dispatch({
        type: LOGIN,
        payload: res.data,
      });
      if (res.data.status == 200) {
        Auth.set(KEY.LOGIN, true);
        Auth.set(KEY.USER, res.data.username);
        dispatch(isLoginAction(true));
      }
    });

    dispatch({
      type: IS_LOGIN_LOADING,
      payload: false,
    });

    dispatch({
      type: IS_LOADING,
      payload: false,
    });
  } catch (e) {
    dispatch({
      type: IS_LOGIN_ERROR,
      payload: e,
    });

    dispatch({
      type: IS_LOGIN_LOADING,
      payload: false,
    });

    dispatch({
      type: IS_LOADING,
      payload: false,
    });
  }
};
