import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { login } from '../../api/authApi';
import CSRFToken from '../../common/csrftoken';

class LoginContainer extends Component {

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
    this.props.login(user, () => {
      this.props.history.push("/todolist");
    });
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
    if (this.props.isAuthenticated === true) {
      return <Redirect to='/todolist' />
    }
    return(
      <div className="container align-baseline Login">
        <Form onSubmit={this.onSubmit.bind(this)}>
          <CSRFToken />
          <FormGroup>
            <Label for="exampleUsername">Username</Label>
            <Input type="username" name="username" id="exampleUsername" placeholder="username"
              onChange={(e) => {this.updateState(e, 'login')}}
            required/>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password"
              onChange={(e) => {this.updateState(e, 'password')}}
            required/>
          </FormGroup>
          <FormGroup>
            <Button type="submit" color="primary">Login</Button>
          </FormGroup>
          <FormGroup>
            <Link to="/register">Criar conta</Link>
          </FormGroup>
        </Form>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated,
  }
}

export default connect(mapStateToProps, { login })(LoginContainer);