import * as actionTypes from "./actionTypes";
import authService from "../../services/auth.service";

export const createUser = data => async dispatch => {
  const res = await authService.signup(data);

  console.log(res);

  // if (res.status !== 200) {
  //   return dispatch({
  //     type: actionTypes.CREATE_USER_FAILURE
  //   });
  // }

  return dispatch({
    type: actionTypes.CREATE_USER_SUCCESS
  });
};

export const validUserData = data => async dispatch => {
  return dispatch({
    type: actionTypes.VALID_USER_DATA,
    name: data.name,
    address: data.address,
    postalcode: data.postalcode,
    phonenumber: data.phonenumber,
    municipality: data.municipality,
    email: data.email,
    password: data.password,
    company: data.company
  });
};
