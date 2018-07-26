import React, { Component } from 'react';
import { connect } from 'react-redux';
import loadTodos from '../../api/todoListApi';

class ToDoList extends Component{
  componentDidMount(){
    this.props.fetchToDoLists(this.props.user)
  }
  renderTodoLists() {
    debugger
    if(this.props.todolists != []){
      return _.map(this.props.todolists, todolist => {
        
        return (
          <li className="list-group-item" key={todolist.id}>
              {todolist.title}
          </li>
        );
      });
    }
  }
  render() {

    return(
      <div>
        <ul className="list-group">
          { this.renderTodoLists() }
        </ul>
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
    fetchToDoLists: (user) => {
      dispatch(loadTodos(user));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);