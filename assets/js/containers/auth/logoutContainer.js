import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';

import { logout } from '../../api/authApi';


class LogoutContainer extends Component {

  onClick(e){
    e.preventDefault()
    this.props.logout();
    this.props.history.push("/login");
  }
  render(){
    return (
        <div>
            <Button onClick={this.onClick.bind(this)} color="secondary">
        Logout
    </Button>
        </div>
    );
  }
}

export default connect(null, { logout })(LogoutContainer);