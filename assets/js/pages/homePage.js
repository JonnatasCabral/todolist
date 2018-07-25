import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import store from '../store';
import Login from '../components/login'


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/' component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
	document.getElementById('react-app')
);
