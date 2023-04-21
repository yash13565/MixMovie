import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../Reducer/RootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../Saga/RootSaga";
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
