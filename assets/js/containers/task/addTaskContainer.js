import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';

import TaskForm from '../../components/task/taskForm';
import TaskApi from '../../api/taskApi';

class AddTask extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: '',
      text: '',
      todolist: '',
      deadline: '',
      assignedTo: '',
      editMode: false,

    }
    this.onSubmit = this.onSubmit.bind(this)
    this.updateState = this.updateState.bind(this)
  }

  componentDidMount(){
    this.props.fetchUsers();
    if (_.includes(this.props.match.url, 'edit')) {
      this.setState({ editMode: true })
      this.props.fetchTask(this.props.match.params.id);
    }
  }

  usersOptions() {
    
    return _.map(this.props.users, user => ({
      value: user.id,
      label: user.username
     })
    );
  }

	onSubmit(e) {
    e.preventDefault()

    // TODO: Se editMode tem que chamar this.props.editTask
    if (this.state.editMode) {
      this.props.updateTask({
          title: this.state.title,
          text: this.state.text,
          deadline: this.state.deadline,
          id: this.props.match.params.id,
          assigned_to_id: this.state.assignedTo.value,
          todolist: this.props.task.todolist
        });
    } else {
      this.props.createTask({
        title: this.state.title,
        text: this.state.text,
        deadline: this.state.deadline,
        todolist: this.props.match.params.id,
        assigned_to_id: this.state.assignedTo.value
      });
    }
    this.props.history.push("/todolist");
  }

  updateState (value, field) {
    this.setState(() => ({ [field]: value }));
  }

	render() {
		return (
			<TaskForm 
        onSubmit={this.onSubmit}
        updateState={this.updateState}
        options={this.usersOptions()}
        task={this.props.task}
        editMode={this.state.editMode}
        assignedTo={this.state.assignedTo}
        title={this.state.title}
        text={this.state.text}
        deadline={this.state.deadline}
      />
		);
	}
}

const mapStateToProps = state => {
  return {
    users: state.users.users,
    task: state.task.task,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createTask: (data) => {
      dispatch(TaskApi.createTask(data));
    },
    updateTask: (data) => {
      dispatch(TaskApi.updateTask(data));
    },
    fetchUsers: () => {
      dispatch(TaskApi.fetchUsers());
    },
    fetchTask: (id) => {
      dispatch(TaskApi.fetchTask(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps )(withRouter(AddTask));