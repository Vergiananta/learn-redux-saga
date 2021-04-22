import { combineReducers } from "redux";
import { getAllUsers } from "./user-reducer";

const allReducers = combineReducers({
  getAllUsers
});

export default allReducers
