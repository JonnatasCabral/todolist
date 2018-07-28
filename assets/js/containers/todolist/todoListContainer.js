import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from "react-router-dom";

import AddToDoListContainer from './addTodoListContainer';
import TaskListContainer from '../task/taskListContainer';
import TodoListApi from '../../api/todoListApi';


class ToDoListContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      'newTodolistTitle': '',
    }
    this.removeTodolist = this.removeTodolist.bind(this);
  }

  componentDidMount(){
    this.props.fetchTodoLists(this.props.user);
  }

  removeTodolist(id) {

    this.props.deleteTodoList({
      id: id 
    });
  }

  renderTodoLists(todolists) {
    if(!_.isEmpty(todolists)){
      return _.map(todolists, todolist => {
        let url = `/addTask/${todolist.id}`;
        return (
          <div key={todolist.id}> 
            <h3>{todolist.title}</h3>
            <Table hover>
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
                    <Button className="btn btn-danger" onClick={() => this.removeTodolist(todolist.id)}>Remove</Button>
                  </th>
                </tr>
              </thead>
              <TaskListContainer tasks={todolist.tasks}/>
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