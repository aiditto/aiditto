import { combineReducers } from "redux";
import authReducer from "./authReducer";
import demandReducer from "./demandReducer";
import regformReducer from "./regformReducer";
import connectedItemReducer from "./connectedItemsReducer";
import userSignupReducer from "./userSignupReducer";
import uiReducer from "./uiReducer";
import wordpressReducer from "./wordpressReducer";

export default combineReducers({
  auth: authReducer,
  demand: demandReducer,
  regform: regformReducer,
  userSignupData: userSignupReducer,
  ui: uiReducer,
  connectedItems: connectedItemReducer,
  wp: wordpressReducer
});
