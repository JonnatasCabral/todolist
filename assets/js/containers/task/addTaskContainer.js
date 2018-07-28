import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import TaskForm from '../../components/task/taskForm';
import TaskApi from '../../api/taskApi';

class AddTask extends Component {

  componentDidMount(){
    this.props.fetchUsers();
  }

  constructor(props){
    super(props);
    this.state = {
      title: '',
      text: '',
      todolist: '',
      assignedTo: ''

    }
    this.onSubmit = this.onSubmit.bind(this)
    this.updateState = this.updateState.bind(this)
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
    const task = {
      title: this.state.title,
      text: this.state.text,
      todolist: this.props.match.params.id,
      assigned_to_id: this.state.assignedTo
    }

    this.props.createTask(task);
    this.props.history.push("/todolist");
  }

  updateState (value, field) {
    this.setState(() => ({ [field]: value }));
  }

	render() {
		return (
			<TaskForm onSubmit={this.onSubmit} updateState={this.updateState} options={this.usersOptions()} />
		);
	}
}

const mapStateToProps = state => {
  return {
    users: state.users.users,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createTask: (data) => {
      dispatch(TaskApi.createTask(data));
    },
    fetchUsers: () => {
      dispatch(TaskApi.fetchUsers());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps )(AddTask);