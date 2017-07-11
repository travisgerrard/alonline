import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class SignupForm extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    errors: {}
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};
    this.setState({ errors });

    this.props.userSignupRequest(this.state).then(
      () => {},
      (errors) => errors.response.json().then(({errors}) => this.setState({ errors }))
    );
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <h1>Join our community!</h1>

        {!!this.state.errors.global && <div className="ui negative message"><p>{this.state.errors.global}</p></div>}


        <div className={classnames('field', {error: !!this.state.errors.username})}>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            id="username"
          />
        </div>

        <div className={classnames('field', {error: !!this.state.errors.email})}>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            id="email"
            type="email"
          />
          <span>{this.state.errors.email}</span>
        </div>

        <div className={classnames('field', {error: !!this.state.errors.password})}>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            id="password"
            type="password"
          />
          <span>{this.state.errors.password}</span>
        </div>

        <div className={classnames('field', {error: !!this.state.errors.passwordConfirmation})}>
          <label htmlFor="passwordConfirmation">Password Confirmation</label>
          <input
            name="passwordConfirmation"
            value={this.state.passwordConfirmation}
            onChange={this.handleChange}
            id="passwordConfirmation"
            type="password"
          />
          <span>{this.state.errors.passwordConfirmation}</span>
        </div>

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
