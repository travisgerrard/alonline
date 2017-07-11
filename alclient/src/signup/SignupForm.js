import React, { Component } from 'react';

class SignupForm extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <h1>Join our community!</h1>

        <div className="field">
          <label htmlFor="username">Username</label>
          <input
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            id="username"
          />
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            id="email"
            type="email"
          />
        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            id="password"
            type="password"
          />
        </div>

        <div className="field">
          <label htmlFor="passwordConfirmation">Password Confirmation</label>
          <input
            name="passwordConfirmation"
            value={this.state.passwordConfirmation}
            onChange={this.handleChange}
            id="passwordConfirmation"
            type="password"
          />
        </div>

        <div className="field">
          <button className="ui primary button">Sign up</button>
        </div>

      </form>
    );
  }

}

export default SignupForm;
