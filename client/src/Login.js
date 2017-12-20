import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleSubmit(e) {
    e.preventDefault();
    axios.post('/api/authenticate', {
      password: e.target.value
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
