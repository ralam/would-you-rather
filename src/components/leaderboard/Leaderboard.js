import React, { Component } from 'react';
import { connect } from 'react-redux';

import defaultAvatar from '../../assets/blank-avatar.jpg';
import Login from '../login/Login';
import './Leaderboard.scss';

class Leaderboard extends Component {
  render() {
    const { users, authedUser } = this.props;
    if (authedUser) {
      return (
        <div className="container">
          {users.map(user => (
            <div key={user.id} className="user">
              <img
                className="avatar"
                src={user.avatarURL || defaultAvatar}
                alt="user avatar"
              />
              <div className="username">{user.name}</div>
              <div className="questions-asked">
                Questions asked: {user.questions.length}
              </div>
              <div className="questions-answered">
                Questions answered: {Object.keys(user.answers).length}
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return <Login />;
    }
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users: Object.values(users).sort((a, b) => {
      const aTotal = Object.keys(a.answers).length + a.questions.length;
      const bTotal = Object.keys(b.answers).length + b.questions.length;
      return bTotal - aTotal;
    })
  };
}

export default connect(mapStateToProps)(Leaderboard);
