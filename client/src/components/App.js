import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as actions from './../actions/actions';

import Card from './Card';
import Auth from './Auth';

class App extends React.Component {
  
  componentWillMount() {
    this.props.actions.accessCard();
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route path='/login' component={Auth}/>
          <Route exact path="/" render={() => (
              this.props.isLoggedIn ? (
                <Card />
              ) : (
                <Auth />
              )
            )}/>
        </Switch>
      </div>
    )
  }
}

App.propTypes = {
  actions: PropTypes.object,
  isLoggedIn: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    isLoggedIn: state.isLoggedIn
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
