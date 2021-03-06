import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import store from '../store';
import Routes from '../routes';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
	document.getElementById('react-app')
);
