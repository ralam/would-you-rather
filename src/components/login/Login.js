import React, { Component } from 'react';
import { connect } from 'react-redux';

import { showAuthModal } from '../../actions/modals';

import './Login.scss';

class Login extends Component {
  showLoginModal = e => {
    e.preventDefault();
    this.props.dispatch(showAuthModal());
  };

  render() {
    return (
      <div className="login-container">
        <button className="btn login" onClick={this.showLoginModal}>
          Log in
        </button>
      </div>
    );
  }
}

export default connect()(Login);
