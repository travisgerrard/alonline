import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { userSignupRequest } from '../actions/signupActions';

class SignUpPage extends Component {

  render() {
    const { userSignupRequest } = this.props;
    return (
      <div>
        <SignupForm userSignupRequest={userSignupRequest} />
      </div>
    );
  }
}

SignUpPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest })(SignUpPage);
