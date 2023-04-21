import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducer/index";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/index";
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
