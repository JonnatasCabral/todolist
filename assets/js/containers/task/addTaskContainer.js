import React, { Component } from 'react';
import { connect } from 'react-redux';

import TaskForm from '../../components/task/taskForm';
import TaskApi from '../../api/taskApi';

class AddTask extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: '',
      text: '',
      todolist: ''

    }
    this.onSubmit = this.onSubmit.bind(this)
    this.updateState = this.updateState.bind(this)
  }

	onSubmit(e) {
    e.preventDefault()
    const task = {
      title: this.state.title,
      text: this.state.text,
      todolist: this.props.match.params.id
    }

    this.props.createTask(task);
    this.props.history.push("/todolist");
  }

  updateState (e, field) {
    const value = e.target.value;
    if (field === 'title') {
      this.setState(() => ({ title: value }));
    }
    if (field === 'text') {
      this.setState(() => ({ text: value }));
    }
  }

	render() {
		return (
			<TaskForm onSubmit={this.onSubmit} updateState={this.updateState} />
		);
	}
}

const mapDispatchToProps = dispatch => {
  return {
    createTask: (data) => {
      dispatch(TaskApi.createTask(data));
    }
  }
}
export default connect(null, mapDispatchToProps )(AddTask);