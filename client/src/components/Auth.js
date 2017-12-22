import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './../actions/actions';
import PropTypes from 'prop-types';
import React from 'react';

class Auth extends React.Component {  

  componentWillMount() {
    this.props.actions.fetchStuff();
  }

  renderData() {
    return <div>{this.props.stuffs}</div>;
  }
  
  render() {
    console.log(this.props)
    return (
      <div className="">
          {this.props.stuffs.length > 0 ?
            this.renderData()
            :
            <div className="">
              No Data
            </div>
          }
      </div>
    );
  }
}

Auth.propTypes = {
  actions: PropTypes.object,
  stuffs: PropTypes.string
};

function mapStateToProps(state) {
  return {
    stuffs: state.stuff
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