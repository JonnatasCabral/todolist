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
    this.updateTaskState = this.updateTaskState.bind(this);
  }

  removeTask (task){
    this.props.deleteTask({
      task: task
    });
  }
  
  updateTaskState (task){
    let new_task = {};
    if (task.is_done){
       new_task = {
        id: task.id, is_done:false
      }
    } else {
       new_task = {
        id: task.id, is_done:true
      }
    }
    this.props.updateStateTask(new_task);
  }

  renderTasks(tasks) {
    return _.map(tasks, task => {
      let url = `/edittask/${task.id}/`;
      return (
        <tr key={task.id}>
          <td>{task.title}</td>
          <td>{task.text}</td>
          <td>{_.has(task, 'assigned_to.username') ? task.assigned_to.username : '-' }</td>
          <td>
            <Input 
            onClick={() => this.updateTaskState(task)} type="checkbox"
            defaultChecked={task.is_done}

            />{''}
          </td>
          <td>{task.deadline}</td>
          <td><Link to={url}>Edit </Link></td>
          <td><Button onClick={() => this.removeTask(task)}>Remove</Button></td>
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
      updateTaskState={this.updateTaskState}
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
    },
    updateStateTask: (task) => {
      dispatch(TaskApi.updateStateTask(task))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);

