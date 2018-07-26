import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const TodoListForm = (props) => {
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
        <Button type="submit" color="primary">
          {props.buttonTitle}
        </Button>
      </Form>
      
    </div>
  );
};

export default TodoListForm;