import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createUser } from '../../api/authApi';
import { login } from '../../api/authApi';


class RegisterContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      email:'',
    }
  }

  onSubmit(e) {
    e.preventDefault()
    const user = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email 
    }
    this.props.createUser(user)
    this.props.history.push('/');
      
  }

  updateState (value, field) {
    this.setState(() => ({ [field]: value }));
  }

  render(){
    return(
      <div className="container align-baseline Login">
        <Form onSubmit={this.onSubmit.bind(this)}>
          <FormGroup>
            <Label for="Username">Email</Label>
            <Input type="email" name="email" id="Email" placeholder="email"
              onChange={(e) => {this.updateState(e.target.value, 'email')}}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Username">Username</Label>
            <Input type="username" name="username" id="Username" placeholder="username"
              onChange={(e) => {this.updateState(e.target.value, 'username')}}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Password">Password</Label>
            <Input type="password" name="password" id="Password" placeholder="password"
              onChange={(e) => {this.updateState(e.target.value, 'password')}}
            />
          </FormGroup>
          <FormGroup>
            <Button type="submit" color="primary">Submit</Button>
          </FormGroup>
          <FormGroup>
            <Link to="/">Faça Login</Link>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default connect(null, { createUser })(withRouter(RegisterContainer));