import * as actionTypes from "./actionTypes";
import * as actions from "./rootAction";
import demandService from "services/demand.service";
import messages from "variables/messages";

export const getShortDemandList = () => ({
  type: actionTypes.GET_SHORT_DEMAND_LIST
});

export const getShortDemandListSuccess = shortDemands => ({
  type: actionTypes.GET_SHORT_DEMAND_LIST_SUCCESS,
  shortDemands: shortDemands
});

export const getShortDemandListFailure = error => ({
  type: actionTypes.GET_SHORT_DEMAND_LIST_FAILURE,
  error: error
});

export const getDemandList = () => ({
  type: actionTypes.GET_DEMAND_LIST
});

export const getDemandListSuccess = demands => ({
  type: actionTypes.GET_DEMAND_LIST_SUCCESS,
  demands: demands
});

export const getDemandListFailure = error => ({
  type: actionTypes.GET_DEMAND_LIST_FAILURE,
  error: error
});

export const deleteDemand = () => ({
  type: actionTypes.DELETE_DEMAND
});

export const deleteDemandSuccess = () => ({
  type: actionTypes.DELETE_DEMAND_SUCCESS
});

export const deleteDemandFailure = error => ({
  type: actionTypes.DELETE_DEMAND_FAILURE,
  error: error
});

export const createDemand = () => ({
  type: actionTypes.CREATE_DEMAND
});

export const createDemandSuccess = () => ({
  type: actionTypes.CREATE_DEMAND_SUCCESS
});

export const createDemandFailure = error => ({
  type: actionTypes.CREATE_DEMAND_FAILURE,
  error: error
});

export const updateSelectedCategory = category => ({
  type: actionTypes.UPDATE_SELECTED_CATEGORY,
  selectedCategory: category
});

export function getShortDemands() {
  return dispatch => {
    dispatch(getShortDemandList());
    demandService.shortList(response => {
      if (response.status === 200) {
        dispatch(getShortDemandListSuccess(response.data.message));
      } else {
        dispatch(getShortDemandListFailure(response.message));
      }
    });
  };
}

export function getDemands() {
  return dispatch => {
    dispatch(getDemandList());
    demandService.list(response => {
      if (response.status === 200) {
        dispatch(getDemandListSuccess(response.data.message));
      } else {
        dispatch(getDemandListFailure(response.message));
      }
    });
  };
}

export const deleteDemandItem = demandId => {
  return dispatch => {
    dispatch(deleteDemand());
    demandService.deleteDemand(demandId, response => {
      if (response.status === 200) {
        dispatch(deleteDemandSuccess());
        dispatch(actions.showNotification(messages.DEMAND_DELETED_SUCCESS, "success"));
        dispatch(getDemands());
      } else {
        dispatch(deleteDemandFailure(response.message));
        dispatch(actions.showNotification(messages.DEMAND_DELETED_ERROR, "error"));
      }
    });
  };
};

export const createDemandItem = data => {
  return dispatch => {
    dispatch(createDemand());
    demandService.addDemand(data, response => {
      if (response.status === 200) {
        dispatch(createDemandSuccess());
        dispatch(actions.showNotification(messages.DEMAND_ADDED_SUCCESS, "success"));
        dispatch(getDemands());
      } else {
        dispatch(createDemandFailure(response.message));
        dispatch(actions.showNotification(messages.DEMAND_ADDED_ERROR, "error"));
      }
    });
  };
};
