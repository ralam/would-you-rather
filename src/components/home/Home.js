import React, { Component } from 'react';
import { connect } from 'react-redux';

import { unsetAuthedUser } from '../../actions/authedUser';
import Questions from '../questions/Questions';
import Login from '../login/Login';

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
      const { activeTab } = this.state;
      let answeredQuestionsClass = '';
      let unansweredQuestionsClass = '';
      if (activeTab === 'unanswered') {
        unansweredQuestionsClass = 'active';
      } else {
        answeredQuestionsClass = 'active';
      }
      const username = this.props.users[userId].name;
      return (
        <div>
          <div className="welcome">Welcome, {username}</div>
          <div className="questions-container">
            <div
              className={`unanswered-questions ${unansweredQuestionsClass}`}
              onClick={this.showUnanswered}>
              Unanswered Questions
            </div>
            <div
              className={`answered-questions ${answeredQuestionsClass}`}
              onClick={this.showAnswered}>
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
      return <Login />;
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
