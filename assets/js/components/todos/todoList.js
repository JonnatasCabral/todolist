import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col  } from 'reactstrap';

import AddToDoListContainer from '../../containers/todolist/addTodoListContainer';
import TodoListApi from '../../api/todoListApi';
import ToDoListContainer from '../../containers/todolist/todoListContainer';
import LogoutContainer from '../../containers/auth/logoutContainer';


class ToDoList extends Component{
  render() {

    return(
      <Container>
        <Row>
          <Col xs="6" sm="4">
            <AddToDoListContainer />
          </Col>
          <Col xs="6" sm="4">
          </Col>
          <Col xs="6" sm="4">
            <LogoutContainer />
          </Col>
        </Row>
        <Row>
          <Col>
            <ToDoListContainer />
          </Col>
        </Row>              
      </Container>
    );
  }
}

export default ToDoList;