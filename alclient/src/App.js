import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import Greetings from './Greetings';
import SignUpPage from './signup/SignUpPage';
import LoginPage from './login/LoginPage';
import './App.css';
import FlashMessagesList from './flash/FlashMessagesList';
import { connect } from 'react-redux';
import { logout } from './actions/authActions';

const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
  )} />
);

class App extends Component {

  logout = (e) => {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
      <div className="right menu">
        <a className="item" href="#" onClick={this.logout}>Logout</a>
      </div>
    );

    const guestLinks = (
      <div className="right menu">
        <ActiveLink activeOnlyWhenExact to="/signup" label="Sign Up" />
        <ActiveLink activeOnlyWhenExact to="/login" label="Login" />
      </div>
    );

    return (
      <div className="ui container">
        <div className="ui mini menu">
          <ActiveLink activeOnlyWhenExact to="/" label="Red Dice" />
          { isAuthenticated ? userLinks : guestLinks }
        </div>
      <FlashMessagesList />

        <Route exact path="/" component={Greetings} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={LoginPage} />


      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default withRouter(connect(mapStateToProps, { logout })(App));
