import * as actionTypes from "./actionTypes";

export const addDemandItem = item => async dispatch => {
  return dispatch({
    type: actionTypes.DEMAND_ITEM_CONNECTED,
    demandItem: item
  });
};

export const removeDemandItem = item => async dispatch => {
  return dispatch({
    type: actionTypes.DEMAND_ITEM_DISCONNECTED,
    demandItem: item.id
  });
};

export const addAssetItem = item => async dispatch => {
  return dispatch({
    type: actionTypes.ASSET_ITEM_CONNECTED,
    assetItem: item
  });
};

export const removeAssetItem = item => async dispatch => {
  return dispatch({
    type: actionTypes.ASSET_ITEM_DISCONNECTED,
    assetItem: item.id
  });
};
