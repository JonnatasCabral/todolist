import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import AddToDoListContainer from './addTodoListContainer';
import TodoListApi from '../../api/todoListApi';


class ToDoListContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      'newTodolistTitle': ''
    }
  }
  componentDidMount(){
    this.props.fetchTodoLists(this.props.user)
  }

  renderTasks(tasks){
    return _.map(tasks, task => {
      return (
        <tr key={task.id}>
          <td>{task.title}</td>
          <td>{task.texto}</td>
          <td><Input value={task.is_done} type="checkbox" />{''}</td>
        </tr>
      );
    });
  }

  renderTodoLists(todolists) {
    if(!_.isEmpty(todolists)){
      return _.map(todolists, todolist => {
        return (
          <div key={todolist.id}> 
            <h3>{todolist.title}</h3>
            <Table>
              <thead>
                <tr>
                  <th>Tasks</th>
                  <th>Texto</th>
                  <th>Done</th>
                </tr>
              </thead>
              <tbody>
                {this.renderTasks(todolist.tasks)}
              </tbody>
            </Table>
          </div>
        );
      });
    }
  }
  render() {
    return( 
      <div>
      { this.renderTodoLists(this.props.todolists) }
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user,
    todolists: state.todolists
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTodoLists: (user) => {
      dispatch(TodoListApi.fetchTodoLists(user));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDoListContainer);