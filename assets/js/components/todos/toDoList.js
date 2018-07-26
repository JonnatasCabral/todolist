import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchToDoLists from '../../api/toDoListApi';

class ToDoList extends Component{
  componentDidMount(){
    this.props.fetchToDoLists()

  }

  render() {
    return(
        <div>To do list </div>
    );
  }
}

export default connect(null, {fetchToDoLists})(ToDoList);