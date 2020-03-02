import React, { Component } from 'react';
import { connect } from 'react-redux';

import { showAuthModal } from '../../actions/modals';
import { saveQuestionAnswer } from '../../actions/questions';
import defaultAvatar from '../../assets/blank-avatar.jpg';
import './Question.scss';

class Question extends Component {
  checkIfVotedForOptionOne = (user, question) => {
    if (!user) {
      return false;
    }
    return !!question.optionOne.votes.find(username => username === user.id);
  };

  checkIfVotedForOptionTwo = (user, question) => {
    if (!user) {
      return false;
    }
    return !!question.optionTwo.votes.find(username => username === user.id);
  };

  generateQuestionAnswers = (question, user) => {
    const votedForOptionOne = this.checkIfVotedForOptionOne(user, question);
    const votedForOptionTwo = this.checkIfVotedForOptionTwo(user, question);
    const hasVoted = votedForOptionOne || votedForOptionTwo;
    if (hasVoted) {
      const vote1Count = question.optionOne.votes.length;
      const vote2Count = question.optionTwo.votes.length;
      const totalCount = vote1Count + vote2Count;
      const vote1Percent = Math.floor((vote1Count / totalCount) * 100);
      const vote2Percent = 100 - vote1Percent;
      return (
        <div className="results">
          <div className={`option-1 ${votedForOptionOne ? 'voted' : ''}`}>
            <p>Number of votes: {vote1Count}</p>
            <p>Percent of votes: {vote1Percent}%</p>
          </div>
          <div className={`option-2 ${votedForOptionTwo ? 'voted' : ''}`}>
            <p>Number of votes: {vote2Count}</p>
            <p>Percent of votes: {vote2Percent}%</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="results">
          <div className="option-1">
            <button
              className="btn vote"
              onClick={() => {
                this.handleVote(question.id, user.id, 'optionOne');
              }}>
              Vote
            </button>
          </div>
          <div
            className="option-2"
            onClick={() => {
              this.handleVote(question.id, user.id, 'optionTwo');
            }}>
            <button className="btn vote">Vote</button>
          </div>
        </div>
      );
    }
  };

  generateAuthorAvatar = (question, users) => {
    if (!question || !users) {
      return <div></div>;
    } else {
      const author = Object.values(users).find(u => u.id === question.author);
      if (!author) debugger;
      const avatarUrl = author.avatarURL || defaultAvatar;
      return (
        <div className="avatar-container">
          <img className="avatar" src={avatarUrl} />
        </div>
      );
    }
  };

  showLoginModal = e => {
    e.preventDefault();
    this.props.dispatch(showAuthModal());
  };

  handleVote = (questionId, userId, answer) => {
    console.log('question id: ', questionId);
    console.log('user id: ', userId);
    console.log('answer: ', answer);
    this.props.dispatch(saveQuestionAnswer(questionId, userId, answer));
  };

  render() {
    const { user, questions, match, users } = this.props;
    const id = match.params.id;
    const question = questions[id];
    console.log(question);
    if (user) {
      return (
        <div>
          {question && (
            <div className="question-container">
              {this.generateAuthorAvatar(question, users)}
              <div className="options">
                <div className="question">Would you rather:</div>
                <div className="option-1">{question.optionOne.text}</div>
                <div className="option-divider">OR</div>
                <div className="option-2">{question.optionTwo.text}</div>
              </div>
              {this.generateQuestionAnswers(question, user)}
              <div>user</div>
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div className="login-prompt">
          <p>Please login to view this poll</p>
          <button className="btn login" onClick={this.showLoginModal}>
            Log in
          </button>
        </div>
      );
    }
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  return {
    questions,
    user: users[authedUser],
    users
  };
}

export default connect(mapStateToProps)(Question);
