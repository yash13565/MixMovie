import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../Reducer/RootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../Saga/RootSaga";
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

//We have imported our middleware and created a const above and created store and passed our rootreducer and our saga middleware.