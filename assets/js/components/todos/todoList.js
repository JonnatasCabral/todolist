import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Container, Row, Col  } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import AddToDoListContainer from '../../containers/addTodoListContainer';
import TodoListApi from '../../api/todoListApi';
import ModalContainer from '../../containers/modalForm';


class ToDoList extends Component{

  constructor(props){
    super(props);
    this.state = {
      'newTodolistTitle': ''
    }
  }
  componentDidMount(){
    this.props.fetchTodoLists(this.props.user)
  }

  onSubmit(e) {
    e.preventDefault()
    const newTolist = {
      title: this.state.newTodolistTitle,
    }

    this.props.createTodoList(newTolist);
  }

  updateState (e, field) {
    const value = e.target.value;
    if (field === 'TodoListtitle') {
      this.setState(() => ({newTodolistTitle: value}));
    }
  }

  renderTasks(tasks){
    return _.map(tasks, task => {
      return (
        <tr key={task.id}>
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
          <Row key={todolist.id}> 
            <h3>{todolist.title}</h3>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>task</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.renderTasks(todolist.tasks)}
              </tbody>
            </Table>
          </Row>
        );
      });
    }
  }
  render() {

    return(
      <Container>
        <Row>
          <Col xs="6" sm="4">
            <AddToDoListContainer />
          </Col>
        </Row>
        
        { this.renderTodoLists(this.props.todolists) }
              
      </Container>
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
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);