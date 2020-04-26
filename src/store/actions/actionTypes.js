// AUTH ACTION TYPES
export const LOGIN_START = "[Auth] Login Start";
export const LOGIN_SUCCESS = "[Auth] Login Success";
export const LOGIN_FAILURE = "[Auth] Login Failed";
export const LOGOUT = "[Auth] Logout";

// DEMAND ACTION TYPES
export const GET_SHORT_DEMAND_LIST = "[Demand] Get Short Demand List";
export const GET_SHORT_DEMAND_LIST_SUCCESS = "[Demand] Get Short Demand List Success";
export const GET_SHORT_DEMAND_LIST_FAILURE = "[Demand] Get Short Demand List Failed";
export const GET_DEMAND_LIST = "[Demand] Get Demand List";
export const GET_DEMAND_LIST_SUCCESS = "[Demand] Get Demand List Success";
export const GET_DEMAND_LIST_FAILURE = "[Demand] Get Demand List Failed";
export const DELETE_DEMAND = "[Demand] Delete Demand";
export const DELETE_DEMAND_SUCCESS = "[Demand] Delete Demand Success";
export const DELETE_DEMAND_FAILURE = "[Demand] Delete Demand Failed";
export const CREATE_DEMAND = "[Demand] Create Demand";
export const CREATE_DEMAND_SUCCESS = "[Demand] Create Demand Success";
export const CREATE_DEMAND_FAILURE = "[Demand] Create Demand Failed";

//REGFORM ACTION TYPES
export const GET_SWEDISH_CITIES_SUCCESS = "[Regform] Get Swedish Cities Success";
export const GET_SWEDISH_CITIES_FAILURE = "[Regform] Get Swedish Cities Success";
export const VALID_USERFORM = "[Regform] UserForm is valid!";
export const INVALID_USERFORM = "[Regform] UserForm is invalid!";
export const VALID_COMPANYFORM = "[Regform] CompForm is valid!";
export const INVALID_COMPANYFORM = "[Regform] CompForm is invalid!";

//USER SIGNUP TYPES
export const CREATE_USER_SUCCESS = "[USER] Created user!";
export const CREATE_USER_FAILURE = "[USER] Failed to create user!";
export const VALID_USER_DATA = "[USER] Valid user data!";
export const UPDATE_SELECTED_CATEGORY = "[Demand] Update Selected Category";

// UI ACTION TYPES
export const SHOW_NOTIFICATION = "[Notification] Show Notification";
export const HIDE_NOTIFICATION = "[Notification] Hide Notification";

//CONNECT DEMAND AND ASSET ITEMS TYPE
export const DEMAND_ITEM_CONNECTED = "[CONNECTEDITEMS] Demand item connected";
export const DEMAND_ITEM_DISCONNECTED = "[CONNECTEDITEMS] Demand item disconnected";
export const ASSET_ITEM_CONNECTED = "[CONNECTEDITEMS] Asset item connected";
export const ASSET_ITEM_DISCONNECTED = "[CONNECTEDITEMS] Asset item disconnected";

// NEWS ACTIONS
export const GET_NEWS = "[News] Get News";
export const GET_NEWS_SUCCESS = "[News] Get News Success";
export const GET_NEWS_FAILURE = "[News] Get News Failed";
export const UPDATE_NEWS_FILTER = "[News] Update News Filter";
