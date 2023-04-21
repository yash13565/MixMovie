import userSaga from "./UserSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([userSaga()]);
}
