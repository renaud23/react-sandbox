import { combineReducers } from "redux";
import layoutReducer from "./layout-reducer";

const combinedReducers = combineReducers({
  layoutReducer
});

export default combinedReducers;
