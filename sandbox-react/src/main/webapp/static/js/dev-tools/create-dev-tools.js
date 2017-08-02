import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

/**
 * Create the DevTools component and export it.
 */
export default createDevTools(
  <DockMonitor
    /**
     * Hide or show the dock with "ctrl-h".
     */
    toggleVisibilityKey='ctrl-h'
    /**
     * Change the position of the dock with "ctrl-q".
     */
    changePositionKey='ctrl-q'
    defaultIsVisible={true}
  >
    <LogMonitor theme='tomorrow' />
  </DockMonitor>
);

/*

import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from 'redux-logger';
import { Provider } from "react-redux";
import Accueil from "./containers/accueil-container";
import Layout from "./components/layout";
import combinedReducers from "./reducers/combined-reducers";
import DevTools from './dev-tools/create-dev-tools';


const logger = createLogger();

const isProduction = process.env.NODE_ENV === 'production';

let store;

if (isProduction) {
  store = createStore(combinedReducers);
} else {
  const enhancer = compose(
    applyMiddleware(logger),
    DevTools.instrument()
  );

  store = createStore(combinedReducers, {}, enhancer);
}


ReactDOM.render(
  <Provider store={store}>
    <div>
      <Layout>
        <Accueil />
      </Layout>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById("application")
);


*/