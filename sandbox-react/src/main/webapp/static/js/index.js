import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Accueil from "./components/accueil";
import Layout from "./components/layout";
import combinedReducers from "./reducers/combined-reducers";

let store = createStore(combinedReducers);

console.log('coucou');

ReactDOM.render(
  <Layout>
    <Accueil />
  </Layout>,
  document.getElementById("application")
);
