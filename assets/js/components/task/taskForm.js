import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from "react-router-dom";

const TaskForm = (props) => {
  return (
    <div>
      <Form onSubmit={props.onSubmit.bind(props)}>
        <Input 
          type="title"
          name="TodoListtitle" 
          id="todoListTitle" 
          placeholder="title"
          onChange={(e) => {props.updateState(e, 'title')}}
        required/>
        <Input 
          type="text"
          name="text" 
          id="taskText" 
          placeholder="Descrição da task"
          onChange={(e) => {props.updateState(e, 'text')}}
          />
        <Button type="submit" color="primary">
          Submit
        </Button>
        <Link to="/todolist" className="btn btn-primary">Cancel</Link>
      </Form>
      
    </div>
  );
};

export default TaskForm;