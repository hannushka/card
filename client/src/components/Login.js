import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        redirect: false
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.toggleRedirect = this.toggleRedirect.bind(this);
    }

    toggleRedirect() {
        this.setState(() => {
            redirect: false;
        });
    }
   
    handleSubmit(e) {
      e.preventDefault();
      console.log(e.target.password.value);
      axios.post('/api/authenticate', {
        password: e.target.password.value
      })
      .then((response) => {
        console.log(response);
        if (response.data.success) {
            sessionStorage.token = response.data.token;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  
    render() {
      const { redirect } = this.state
      console.log(this.props.params)
      return (
        <div className="Login">
          <form onSubmit={this.handleSubmit}>
            <input type="password" name="password" />
            <input type="submit" value="Submit" />
          </form>
          {redirect && (
            <Redirect to={'/card'}/>
          )}
        </div>
      );
    }
  }

export default Login;