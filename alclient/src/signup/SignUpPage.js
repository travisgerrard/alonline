import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { userSignupRequest } from '../actions/signupActions';
import { Redirect } from 'react-router-dom';

class SignUpPage extends Component {

  state = {
    redirect: false
  }

  userSignupRequest = ({ username, email, password, passwordConfirmation}) => {
    return this.props.userSignupRequest({ username, email, password, passwordConfirmation}).then(
      () => { this.setState({ redirect: true })},
    );
  }

  render() {
    //const { userSignupRequest } = this.props;
    return (
      <div>
        {
          this.state.redirect ?
          <Redirect to="/" /> :
          <SignupForm
            userSignupRequest={this.userSignupRequest}
          />
        }
      </div>
    );
  }
}

export default connect(null, { userSignupRequest })(SignUpPage);
