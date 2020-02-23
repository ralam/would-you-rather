import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setAuthedUser } from '../../actions/authedUser';
import { hideAuthModal } from '../../actions/modals';

import './Login.scss';

class Login extends Component {
  handleClick = userId => {
    this.props.dispatch(setAuthedUser(userId));
  };

  closeModal = () => {
    this.props.dispatch(hideAuthModal());
  };

  render() {
    const { users, visible } = this.props;
    return (
      <div
        className={'modal-mask ' + (visible ? 'visible' : 'hidden')}
        onClick={this.closeModal}
      >
        <div className="login-modal">
          <div className="close-btn">x</div>
          <h1 className="header">Choose a user to log in as:</h1>
          <ul className="users">
            {users.map(user => (
              <li
                className="user"
                key={user.id}
                onClick={() => this.handleClick(user.id)}
              >
                {user.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, modals }) {
  return {
    users: Object.values(users),
    visible: modals.authModalVisible
  };
}

export default connect(mapStateToProps)(Login);
