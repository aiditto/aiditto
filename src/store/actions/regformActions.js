import * as actionTypes from "./actionTypes";
import locationService from "../../services/location.service";

export const UserFormIsValid = () => async dispatch => {
  return dispatch({
    type: actionTypes.VALID_USERFORM,
    validUserForm: true
  });
};

export const UserFormIsInvalid = () => async dispatch => {
  return dispatch({
    type: actionTypes.INVALID_USERFORM,
    validUserForm: false
  });
};

export const getSwedishCitiesSuccess = swedishCities => async dispatch => {
  return dispatch({
    type: actionTypes.GET_SWEDISH_CITIES_SUCCESS,
    swedishCities: swedishCities
  });
};

export const getSwedishCitiesFailure = error => async dispatch => {
  return dispatch({
    type: actionTypes.GET_SWEDISH_CITIES_SUCCESS,
    error: error
  });
};

export const CompFormIsValid = () => async dispatch => {
  return dispatch({
    type: actionTypes.VALID_COMPANYFORM,
    validCompanyForm: true
  });
};

export const CompFormIsInvalid = () => async dispatch => {
  return dispatch({
    type: actionTypes.INVALID_COMPANYFORM,
    validCompanyForm: false
  });
};

export function getSweCities() {
  return dispatch => {
    locationService.getSwedishCities(response => {
      if (response.status === 200) {
        dispatch(getSwedishCitiesSuccess(response.data.message));
      } else {
        dispatch(getSwedishCitiesFailure(response.message));
      }
    });
  };
}
