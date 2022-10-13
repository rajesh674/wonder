//import { applyMiddleware, compose, createStore } from 'redux';
//import thunk from 'redux-thunk';
//import {composeWithDevTools } from 'redux-devtools-extension';
//import logger from 'redux-logger';
//import rootReducer from '../reducers';

//let middleware = [];
//middleware = [...middleware, thunk];

//const store = createStore(rootReducer, {});
// const getStore = () => {
// 	return store;
// };

//export default store;



import { createStore } from "redux";
import reducers from "../Layout/redux/reducers"

export const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//export default store;