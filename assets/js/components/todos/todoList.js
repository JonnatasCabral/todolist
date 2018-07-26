import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchTodoLists from '../../api/todoListApi';
import { Table } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class ToDoList extends Component{
  componentDidMount(){
    this.props.fetchTodoLists(this.props.user)
  }

  renderTasks(tasks){
    return _.map(tasks, task => {
      return (
        <tr>
          <td><Input value={task.is_done} type="checkbox" />{' asd'}</td>
          <td>{task.title}</td>
        </tr>
      );
    });
  }
  renderTodoLists(todolists) {
    if(!_.isEmpty(todolists)){
      return _.map(todolists, todolist => {
        return (
          <div> 
            <h3>{todolist.title}</h3>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>task</th>
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
      dispatch(fetchTodoLists(user));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);