import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col  } from 'reactstrap';

import TodoListForm from '../../components/todos/todoListForm';
import TodoListApi from '../../api/todoListApi';


class AddToDoListContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      'newTodolistTitle': ''
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.updateState = this.updateState.bind(this)
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
    if (field === 'title') {
      this.setState(() => ({newTodolistTitle: value}));
    }
  }
  render() {

    return(  
      <TodoListForm onSubmit={this.onSubmit} updateState={this.updateState} buttonTitle="Add Todolist"/>   
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createTodoList: (data) => {
      dispatch(TodoListApi.createTodoList(data));
    }
  }
}
export default connect(null, mapDispatchToProps )(AddToDoListContainer);