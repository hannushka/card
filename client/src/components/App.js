import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Card from './Card';
import axios from 'axios';

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }} />
  )} />
)

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
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
        fakeAuth.authenticate(() => {
          this.setState(() => ({
            redirect: true
          }))
        })
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    const { redirect } = this.state
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

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Login}/>
          <PrivateRoute auth={false} path='/card' component={Card}/>
        </Switch>
      </div>
    )
  }
}

export default App;
