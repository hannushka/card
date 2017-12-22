import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from './Card';
import Auth from './Auth';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Auth />
      </div>
    )
  }
}

export default App;
