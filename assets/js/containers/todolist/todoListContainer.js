import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from "react-router-dom";
import _ from 'lodash';

import AddToDoListContainer from './addTodoListContainer';
import TodoListApi from '../../api/todoListApi';


class ToDoListContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      'newTodolistTitle': '',
    }
    this.removeTask = this.removeTask.bind(this);
  }
  componentDidMount(){
    this.props.fetchTodoLists(this.props.user);
  }

  renderTasks(tasks) {
    return _.map(tasks, task => {
      return (
        <tr key={task.id}>
          <td>{task.title}</td>
          <td>{task.text}</td>
          <td>{_.has(task, 'assigned_to.name') ? task.assigned_to.username : '-' }</td>
          <td><Input value={task.is_done} type="checkbox" />{''}</td>
        </tr>
      );
    });
  }

  removeTask(todolist) {

    this.props.deleteTodoList({
      id: todolist.id 
    });
  }

  renderTodoLists(todolists) {
    if(!_.isEmpty(todolists)){
      return _.map(todolists, todolist => {
        let url = `/addTask/${todolist.id}`;
        return (
          <div key={todolist.id}> 
            <h3>{todolist.title}</h3>
            <Table>
              <thead>
                <tr>
                  <th>Tasks</th>
                  <th>Descrição</th>
                  <th>Assigned To</th>
                  <th>Done</th>
                  <th>
                    <Link to={url} className="btn btn-primary">Add task</Link>
                  </th>
                  <th>
                    <Button className="btn btn-danger" onClick={() => this.removeTask(todolist)}>Remove</Button>
                  </th>
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
    },
    deleteTodoList: (id) => {
      dispatch(TodoListApi.delete(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDoListContainer);