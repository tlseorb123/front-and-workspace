import { combineReducers } from "redux";
import counter from "./counter";

const store = combineReducers({
  counter,
});

export default store;
