import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col  } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

import AddToDoListContainer from '../../containers/todolist/addTodoListContainer';
import TodoListApi from '../../api/todoListApi';
import ToDoListContainer from '../../containers/todolist/todoListContainer';
import LogoutContainer from '../../containers/auth/logoutContainer';


class ToDoList extends Component{
  render() {

    return(
      
      <Container>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            <AddToDoListContainer />
          </NavbarBrand>
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><LogoutContainer /></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
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

