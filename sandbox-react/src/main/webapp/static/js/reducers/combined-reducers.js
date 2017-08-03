import { combineReducers } from "redux";
import layoutReducer from "./layout-reducer";
import applicationReducer from "./application-reducer";

const combinedReducers = combineReducers({
  layoutReducer, applicationReducer
});

export default combinedReducers;
