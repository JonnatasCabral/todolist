import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import CSRFToken from '../../common/csrftoken';

const TodoListForm = (props) => {
  return (
      <Form onSubmit={props.onSubmit.bind(props)} inline>
      <CSRFToken />
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input 
            type="title"
            name="TodoListtitle" 
            id="todoListTitle" 
            placeholder="title"
            onChange={(e) => {props.updateState(e, 'title')}}
          required/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Button type="submit" color="primary">
            {props.buttonTitle}
          </Button>
        </FormGroup>
      </Form>
      
  );
};

export default TodoListForm;