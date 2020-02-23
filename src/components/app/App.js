import React, { Component } from 'react';
import { connect } from 'react-redux';

import { handleInitialData } from '../../actions/shared';
import { unsetAuthedUser } from '../../actions/authedUser';
import { showAuthModal } from '../../actions/modals';
import Login from '../login/Login';

import './App.scss';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  handleLogout = () => {
    this.props.dispatch(unsetAuthedUser());
  };

  showLoginModal = e => {
    e.preventDefault();
    this.props.dispatch(showAuthModal());
  };

  userStateNav(userId) {
    if (userId) {
      const username = this.props.users[userId].name;
      return (
        <div>
          <div>{username}</div>
          <button onClick={this.handleLogout}>Log out</button>
        </div>
      );
    } else {
      return <div>Log in</div>;
    }
  }

  generateHomeContent(userId) {
    if (userId) {
      const username = this.props.users[userId].name;
      return (
        <div>
          <div className="welcome">Welcome, {username}</div>
          <button className="btn logout" onClick={this.handleLogout}>
            Log out
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button className="btn login" onClick={this.showLoginModal}>
            Log in
          </button>
          <Login />
        </div>
      );
    }
  }

  render() {
    const { authedUser } = this.props;
    return (
      <div className="app">
        <h1>Would you rather?</h1>
        {this.generateHomeContent(authedUser)}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, modals }) {
  return {
    authedUser,
    users
  };
}

export default connect(mapStateToProps)(App);
