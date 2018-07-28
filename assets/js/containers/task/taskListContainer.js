import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Input } from 'reactstrap';
import { Link } from "react-router-dom";

import TaskList from '../../components/task/taskList';
import TaskApi from '../../api/taskApi';




class TaskListContainer extends Component{

  constructor (props){
    super(props);
    this.removeTask = this.removeTask.bind(this);
  }


  removeTask(id){
    this.props.deleteTask({
      id: id
    })
  }

  renderTasks(tasks) {
    return _.map(tasks, task => {
      let url = `/edittask/${task.id}/`;
      return (
        <tr key={task.id}>
          <td>{task.title}</td>
          <td>{task.text}</td>
          <td>{_.has(task, 'assigned_to.name') ? task.assigned_to.username : '-' }</td>
          <td><Input value={task.is_done} type="checkbox" />{''}</td>
          <td><Link to={url}>Edit </Link></td>
          <td><Button onClick={() => this.removeTask(task.id)}>Remove</Button></td>

        </tr>
      );
    });
  }

  
  render() {
    return (
      <TaskList 
      tasks={this.props.tasks}
      renderTasks={this.renderTasks}
      removeTask={this.removeTask}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    task: state.task,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteTask: (id) => {
      dispatch(TaskApi.deleteTask(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);

