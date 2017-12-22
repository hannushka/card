import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './../actions/actions';
import PropTypes from 'prop-types';
import React from 'react';

class Auth extends React.Component {  

  componentWillMount() {
    this.props.actions.fetchToken();
  }


  render() {
    console.log(this.props.isLoggedIn);
    return (
      <div className="">
       {this.props.isLoggedIn ? "true" : "false"}
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