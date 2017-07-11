import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Greetings from './Greetings';
import SignUpPage from './signup/SignUpPage';
import './App.css';

const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
  )} />
);

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui mini menu">
          <ActiveLink activeOnlyWhenExact to="/" label="Red Dice" />
          <div className="right menu">
            <ActiveLink activeOnlyWhenExact to="/signup" label="Sign Up" />
          </div>
        </div>

        <Route exact path="/" component={Greetings} />
        <Route path="/signup" component={SignUpPage} />

      </div>
    );
  }
}

export default App;
