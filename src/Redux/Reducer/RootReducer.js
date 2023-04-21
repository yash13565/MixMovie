import { combineReducers } from "redux";
import users from "./User";
export const rootReducer = combineReducers({
  users: users
});
//This is my root reducer here i can pass any number of reducer