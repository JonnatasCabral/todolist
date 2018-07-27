import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from '../components/auth/login'
import ToDoList from '../components/todos/todoList'


class Routes extends Component {

  render(){
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/todolist' component={ToDoList} />
            <Route path='/' component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;