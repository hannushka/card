import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './../actions/actions';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

class Auth extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleSubmit() {
    this.props.actions.fetchToken(ReactDOM.findDOMNode(this.refs.password).value);    
  }

  render() {
    return (
      <div className="auth">
        <h3>Skriv in svaret på gåtan</h3>
        <form onSubmit={this.handleSubmit}>
          <FormGroup bsSize="large">
            <FormControl type="password" ref="password"  />
          </FormGroup>
          <Button bsStyle="success" bsSize="large" onClick={this.handleSubmit}>
            Skicka in
          </Button>
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