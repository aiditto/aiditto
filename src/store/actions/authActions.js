import * as actionTypes from "./actionTypes";
import authenticationService from "services/auth.service";

export const loginStart = () => {
  return {
    type: actionTypes.LOGIN_START
  };
};

export const loginSuccess = token => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    token: token
  };
};

export const loginFail = error => {
  return {
    type: actionTypes.LOGIN_FAILURE,
    error: error
  };
};

/* export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime);
  };
}; */

export const login = (email, password) => {
  return dispatch => {
    dispatch(loginStart());
    authenticationService.login(email, password, response => {
      if (response.status === 200) {
        dispatch(loginSuccess(response.data.message.token));
        //Add timeout with expiry date coming from data
        /*   const expirationTime = response.data.message.expires - new Date().getTime();
        dispatch(checkAuthTimeout(expirationTime)); */
      } else {
        dispatch(loginFail(response.message));
      }
    });
  };
};
