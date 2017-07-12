import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import validateInput from '../validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';

class SignupForm extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    errors: {},
    isLoading: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};

    if (this.isValid()) {
      this.setState({ errors: {}, loading: true });
      this.props.userSignupRequest(this.state).then(
        () => {},
        (errors) => errors.response.json().then(({errors}) => this.setState({ errors, loading: false }))
      );
    }
  }

  render() {
    return (
      <form className={classnames('ui', 'form', { loading: this.state.loading })} onSubmit={this.handleSubmit}>
        <h1>Join our community!</h1>

        {!!this.state.errors.global && <div className="ui negative message"><p>{this.state.errors.global}</p></div>}

        <TextFieldGroup
          error={this.state.errors.username}
          label="Username"
          onChange={this.handleChange}
          value={this.state.username}
          field="username"
        />

        <TextFieldGroup
          error={this.state.errors.email}
          label="Email"
          onChange={this.handleChange}
          value={this.state.email}
          field="email"
        />

        <TextFieldGroup
          error={this.state.errors.password}
          label="Password"
          onChange={this.handleChange}
          value={this.state.password}
          field="password"
        />

      <TextFieldGroup
          error={this.state.errors.passwordConfirmation}
          label="Password Confirmation"
          onChange={this.handleChange}
          value={this.state.passwordConfirmation}
          field="passwordConfirmation"
        />

        <div className="field">
          <button className="ui primary button">Sign up</button>
        </div>

      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

export default SignupForm;
