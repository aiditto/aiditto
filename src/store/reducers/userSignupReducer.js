/* eslint-disable no-unused-vars */
import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  name: null,
  address: null,
  postalcode: null,
  phonenumber: null,
  municipality: null,
  email: null,
  password: null,
  company: false
};

const validUserData = (state, action) => {
  return updateObject(state, {
    name: action.name,
    address: action.address,
    postalcode: action.postalcode,
    phonenumber: action.phonenumber,
    municipality: action.municipality,
    email: action.email,
    password: action.password,
    company: action.company
  });
};

const validuserDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.VALID_USER_DATA:
      return validUserData(state, action);

    default:
      return state;
  }
};

export default validuserDataReducer;
