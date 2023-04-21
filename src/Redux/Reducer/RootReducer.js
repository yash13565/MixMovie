import { combineReducers } from "redux";
import users from "./User";
export const rootReducer = combineReducers({
  users: users
});
