import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { login } from '../actions/login';
import { Redirect } from 'react-router-dom';
import { addFlashMessage } from '../actions/flashMessages';

class LoginPage extends Component {

  state = {
    redirect: false
  }

  login = ({ identifier, password }) => {
    return this.props.login({ identifier, password }).then(
      () => {
        this.props.addFlashMessage({
          type: 'success',
          text: 'You logged in successfully. Welcome!'
        });
      this.setState({ redirect: true })},
    );
  }

  render() {
    return (
      <div>
        {
          this.state.redirect ?
          <Redirect to="/" /> :
          <LoginForm
            login={this.login}
          />
        }
      </div>
    );
  }
}

export default connect(null, { login, addFlashMessage })(LoginPage);
