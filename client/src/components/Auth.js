import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './../actions/actions';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

class Auth extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleSubmit(e) {
    e.preventDefault();
    this.props.actions.fetchToken(e.target.password.value);    
  }

  render() {
    return (
      <div className="Auth">
        <form onSubmit={this.handleSubmit}>
          <input type="password" name="password" />
          <input type="submit" value="Submit" />
        </form>
        {this.props.isLoggedIn && 
                <Redirect to={'/'}/>}
      </div>
    );
  }
}

Auth.propTypes = {
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);