import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from "react-router-dom";
import _ from 'lodash';
import Select from 'react-select';

class TaskForm extends React.Component {

  componentDidUpdate(prevProps) {
    // TODO: Checar options pra atualizar o assignedTo, bug pode ser causado por nao ter opcoes ainda
    if (this.props.editMode && (prevProps.task !== this.props.task) && _.has(this.props.task, 'assigned_to.id')) {
      const selectedOption = _.find(this.props.options, ['value', this.props.task.assigned_to.id])
      this.props.updateState(selectedOption, 'assignedTo');
      this.props.updateState(this.props.task.title, 'title');
      this.props.updateState(this.props.task.text, 'text');
    }
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.props.onSubmit.bind(this.props)}>
          <Input
            value={this.props.title} 
            type="title"
            name="TodoListtitle" 
            id="todoListTitle" 
            placeholder="title"
            onChange={(e) => {this.props.updateState(e.target.value, 'title')}}
            required/>
          <Input
            value={this.props.text}
            type="text"
            name="text" 
            id="taskText" 
            placeholder="Descrição da task"
            onChange={(e) => {this.props.updateState(e.target.value, 'text')}}
          />
          <Select 
            value={this.props.assignedTo}
            options={this.props.options} 
            onChange={(option) => this.props.updateState(option, 'assignedTo')} 
          />
          <Button type="submit" color="primary">
            Submit
          </Button>
          <Link to="/todolist" className="btn btn-primary">Cancel</Link>
        </Form>
        
      </div>
    );
  }
}

export default TaskForm;
