import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from '../components/auth/login'
import RegisterContainer from '../components/auth/register'
import ToDoList from '../components/todos/todoList'
import AddTask from '../containers/task/addTaskContainer'


class Routes extends Component {

  render(){
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/todolist' component={ToDoList} />
            <Route path='/addtask/:id' component={AddTask} />
            <Route path='/edittask/:id' component={AddTask} />
            <Route exact path='/register' component={RegisterContainer} />
            <Route exact path='/' component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;