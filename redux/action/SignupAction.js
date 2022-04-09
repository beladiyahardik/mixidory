import { IS_LOADING, IS_SIGNUP_ERROR, IS_SIGNUP_LOADING, SIGNUP } from "../type";
import axios from "axios";
import { SIGNUP_API } from "../../config/API";
import { Auth, KEY } from "../../config/auth";
import { isLoginAction } from "./LoginAction";

export const SignupAction = (OBJ) => async (dispatch) => {
    try {
        dispatch({
            type: IS_LOADING,
            payload: true,
        });

        dispatch({
            type: IS_SIGNUP_LOADING,
            payload: true,
        });

        await axios.post(SIGNUP_API, OBJ).then((res) => {
            dispatch({
                type: SIGNUP,
                payload: res.data,
            });
            if (res.data.status == 200) {
                Auth.set(KEY.LOGIN, true);
                Auth.set(KEY.USER, res.data.username);
                dispatch(isLoginAction(true));
            }
        });

        dispatch({
            type: IS_SIGNUP_LOADING,
            payload: false,
        });

        dispatch({
            type: IS_LOADING,
            payload: false,
        });
    } catch (e) {
        dispatch({
            type: IS_SIGNUP_ERROR,
            payload: e,
        });

        dispatch({
            type: IS_SIGNUP_LOADING,
            payload: false,
        });

        dispatch({
            type: IS_LOADING,
            payload: false,
        });
    }
};
