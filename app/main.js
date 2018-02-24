import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { configureUrlQuery } from 'react-url-query';
import { queryReducer } from "./reducers/reducer.js";
// link the history used in our app to url-query so it can update the URL with it.
configureUrlQuery({ history });

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(queryReducer)}>
    <App />
  </Provider>,
  document.getElementById('root')

)