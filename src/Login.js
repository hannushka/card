import React, { Component } from 'react';

class Login extends Component {
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
