import * as actionTypes from "../actions/actionTypes";

const initialState = {
  connectedDemands: [],
  connectedAssets: []
};

const connectedItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DEMAND_ITEM_CONNECTED:
      return {
        ...state,
        connectedDemands: [...state.connectedDemands, action.demandItem]
      };

    case actionTypes.DEMAND_ITEM_DISCONNECTED:
      return {
        ...state,
        connectedDemands: state.connectedDemands.filter(item => item.id !== action.demandItem)
      };

    case actionTypes.ASSET_ITEM_CONNECTED:
      return {
        ...state,
        connectedAssets: [...state.connectedAssets, action.assetItem]
      };

    case actionTypes.ASSET_ITEM_DISCONNECTED:
      return {
        ...state,
        connectedAssets: state.connectedAssets.filter(item => item.id !== action.assetItem)
      };

    default:
      return state;
  }
};

export default connectedItemsReducer;
