import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setAuthedUser } from '../../actions/authedUser';
import { hideAuthModal } from '../../actions/modals';

import './LoginModal.scss';

class LoginModal extends Component {
  handleClick = userId => {
    this.props.dispatch(setAuthedUser(userId));
    this.props.dispatch(hideAuthModal());
  };

  closeModal = () => {
    this.props.dispatch(hideAuthModal());
  };

  render() {
    const { users, visible } = this.props;
    return (
      <div
        className={'modal-mask ' + (visible ? 'visible' : 'hidden')}
        onClick={this.closeModal}>
        <div className="login-modal" onClick={e => e.stopPropagation()}>
          <div className="close-btn" onClick={this.closeModal}>
            x
          </div>
          <h1 className="header">Choose a user to log in as:</h1>
          <ul className="users">
            {users.map(user => (
              <li
                className="user"
                key={user.id}
                onClick={() => this.handleClick(user.id)}>
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

export default connect(mapStateToProps)(LoginModal);
