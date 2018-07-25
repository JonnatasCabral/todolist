import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import login   from '../actions/login';
import { connect } from 'react-redux';


class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      token: '',
      isAuthenticated: false,
      submited: false
    }
  }

  onSubmit(e) {
    e.preventDefault()
    const user = {
      username: this.state.username,
      password: this.state.password 
    }
    this.props.login(user);
  }

  updateState (e, field) {
    const value = e.target.value;
    if (field === 'login') {
      this.setState(() => ({username: value}));
    }else{
      this.setState(() => ({password: value}));
    }
  }

  render(){
    return(
      <div className="container align-baseline Login">
        <Form onSubmit={this.onSubmit.bind(this)}>
          <FormGroup>
            <Label for="exampleUsername">Username</Label>
            <Input type="username" name="username" id="exampleUsername" placeholder="username"
              onChange={(e) => {this.updateState(e, 'login')}}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password"
              onChange={(e) => {this.updateState(e, 'password')}}
            />
          </FormGroup>
          <Button type="submit" color="primary">Login</Button>
        </Form>
      </div>
    );
  }
}

export default connect(null, { login })(Login);