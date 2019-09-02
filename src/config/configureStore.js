import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../redux/rootReducer";
import rootSaga from "../redux/rootSaga";

export default function () {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

  sagaMiddleware.run(rootSaga);
  return store;
};
