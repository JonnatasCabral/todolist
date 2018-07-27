import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Container, Row, Col  } from 'reactstrap';

import AddToDoListContainer from '../../containers/todolist/addTodoListContainer';
import TodoListApi from '../../api/todoListApi';
import ToDoListContainer from '../../containers/todolist/todoListContainer';


class ToDoList extends Component{
  render() {

    return(
      <Container>
        <Row>
          <Col xs="6" sm="4">
            <AddToDoListContainer />
          </Col>
        </Row>
        <Row>
          <ToDoListContainer />
        </Row>              
      </Container>
    );
  }
}

export default ToDoList;