import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
