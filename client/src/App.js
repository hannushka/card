import ReactCardFlip from 'react-card-flip';
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Card from './Card';
import Login from './Login';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/card' component={Card}/>
        </Switch>
      </div>
    )
  }
}

export default App;
