import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { userSignupRequest, isUserExists } from '../actions/signupActions';
import { Redirect } from 'react-router-dom';
import { addFlashMessage } from '../actions/flashMessages';

class SignUpPage extends Component {

  state = {
    redirect: false
  }

  userSignupRequest = ({ username, email, password, passwordConfirmation}) => {
    return this.props.userSignupRequest({ username, email, password, passwordConfirmation}).then(
      () => {
        this.props.addFlashMessage({
          type: 'success',
          text: 'You signed up successfully. Welcome!'
        });
        this.setState({ redirect: true })},
    );
  }

  render() {
    const { isUserExists } = this.props;
    return (
      <div>
        {
          this.state.redirect ?
          <Redirect to="/" /> :
          <SignupForm
            userSignupRequest={this.userSignupRequest}
            isUserExists={isUserExists}
          />
        }
      </div>
    );
  }
}

export default connect(null, { userSignupRequest, addFlashMessage, isUserExists })(SignUpPage);
