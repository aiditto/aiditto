/* eslint-disable no-unused-vars */
import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  demands: [],
  shortDemands: [],
  loading: false,
  error: null,
  selectedCategory: 1
};

const getDemandList = (state, action) => {
  return updateObject(state, { loading: true, error: null });
};

const getDemandListSuccess = (state, action) => {
  return updateObject(state, { loading: false, error: null, demands: action.demands });
};

const getDemandListFailure = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error,
    demands: []
  });
};

const getShortDemandList = (state, action) => {
  return updateObject(state, { loading: true, error: null });
};

const getShortDemandListSuccess = (state, action) => {
  return updateObject(state, { loading: false, error: null, shortDemands: action.shortDemands });
};

const getShortDemandListFailure = (state, action) => {
  return updateObject(state, { loading: false, error: action.error, shortDemands: [] });
};

const deleteDemand = (state, action) => {
  return updateObject(state, { loading: true, error: null });
};

const deleteDemandSuccess = (state, action) => {
  return updateObject(state, { loading: false, error: null });
};

const deleteDemandFailure = (state, action) => {
  return updateObject(state, { loading: false, error: action.error });
};

const createDemand = (state, action) => {
  return updateObject(state, { loading: true, error: null });
};

const createDemandSuccess = (state, action) => {
  return updateObject(state, { loading: false, error: null });
};

const createDemandFailure = (state, action) => {
  return updateObject(state, { loading: false, error: action.error });
};

const updateSelectedCategory = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: null,
    selectedCategory: action.selectedCategory
  });
};

const demandReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_SHORT_DEMAND_LIST:
      return getShortDemandList(state, action);

    case actionTypes.GET_SHORT_DEMAND_LIST_SUCCESS:
      return getShortDemandListSuccess(state, action);

    case actionTypes.GET_SHORT_DEMAND_LIST_FAILURE:
      return getShortDemandListFailure(state, action);

    case actionTypes.GET_DEMAND_LIST:
      return getDemandList(state, action);

    case actionTypes.GET_DEMAND_LIST_SUCCESS:
      return getDemandListSuccess(state, action);

    case actionTypes.GET_DEMAND_LIST_FAILURE:
      return getDemandListFailure(state, action);

    case actionTypes.DELETE_DEMAND:
      return deleteDemand(state, action);

    case actionTypes.DELETE_DEMAND_SUCCESS:
      return deleteDemandSuccess(state, action);

    case actionTypes.DELETE_DEMAND_FAILURE:
      return deleteDemandFailure(state, action);

    case actionTypes.CREATE_DEMAND:
      return createDemand(state, action);

    case actionTypes.CREATE_DEMAND_SUCCESS:
      return createDemandSuccess(state, action);

    case actionTypes.CREATE_DEMAND_FAILURE:
      return createDemandFailure(state, action);

    case actionTypes.UPDATE_SELECTED_CATEGORY:
      return updateSelectedCategory(state, action);

    default:
      return state;
  }
};

export default demandReducer;
