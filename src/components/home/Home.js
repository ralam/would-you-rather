import React, { Component } from 'react';
import { connect } from 'react-redux';

import { unsetAuthedUser } from '../../actions/authedUser';
import { showAuthModal } from '../../actions/modals';
import Questions from '../questions/Questions';

import './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'unanswered'
    };
  }

  handleLogout = () => {
    this.props.dispatch(unsetAuthedUser());
  };

  showLoginModal = e => {
    e.preventDefault();
    this.props.dispatch(showAuthModal());
  };

  showUnanswered = () => {
    this.setState(() => ({
      activeTab: 'unanswered'
    }));
  };

  showAnswered = () => {
    this.setState(() => ({
      activeTab: 'answered'
    }));
  };

  generateHomeContent(userId) {
    if (userId) {
      const username = this.props.users[userId].name;
      return (
        <div>
          <div className="welcome">Welcome, {username}</div>
          <div className="questions-container">
            <div className="unanswered-questions" onClick={this.showUnanswered}>
              Unanswered Questions
            </div>
            <div className="answered-questions" onClick={this.showAnswered}>
              Answered Questions
            </div>
            <Questions activeTab={this.state.activeTab} />
          </div>
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
        </div>
      );
    }
  }

  render() {
    const { authedUser } = this.props;
    return (
      <div className="home">
        <h1>Would you rather?</h1>
        {this.generateHomeContent(authedUser)}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  return {
    authedUser,
    users,
    questions
  };
}

export default connect(mapStateToProps)(Home);
