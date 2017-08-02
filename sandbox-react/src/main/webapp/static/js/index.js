import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import combinedReducers from "./reducers/combined-reducers";
import { Router, Route } from 'react-router';
import thunk from 'redux-thunk';

import ApplicationRouter from './application-router';


import './../scss/application.scss';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combinedReducers, composeEnhancers(
  applyMiddleware(thunk)
));


ReactDOM.render(
  <Provider store={store}>
    <ApplicationRouter />
  </Provider>,
  document.getElementById("application")
);




