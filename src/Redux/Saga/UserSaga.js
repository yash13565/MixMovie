import { put, takeEvery } from "redux-saga/effects";
function* getApi() {
  let result = yield fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=079d25c82040bf67eedcb0b96ca55e2e&language=en-us&page`
  );
  result = yield result.json();
  yield put({ type: "GET_USERS_SUCCESS", users: result });
}

function* getSearchApi(data) {
  console.log(data, "hello");
  let result = yield fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=c9704debba3f6cfc909e1b2f09d104d1&language=en-US&query=${data.payload}&page=1&include_adult=false`
  );
  result = yield result.json();
  yield put({ type: "GET_USERS_SUCCESS", users: result });
}

function* userSaga() {
  yield takeEvery("GET_USERS_REQUESTED", getSearchApi);
  yield takeEvery("GET_USERS_REQUESTED", getApi);
}
export default userSaga;
