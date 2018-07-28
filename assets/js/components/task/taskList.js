import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Input } from 'reactstrap';
import { Link } from "react-router-dom";



class TaskList extends Component{
  
  render() {
    return (
      <tbody>
        {this.props.renderTasks(this.props.tasks)}
      </tbody>
    );
  }

}

export default TaskList;
