import userSaga from "./UserSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([userSaga()]);
}

//This is our root saga here we are importing all our api using all from redux-saga/effects