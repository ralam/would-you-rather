import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Questions.scss';

class Questions extends Component {
  render() {
    const { authedUser, questions, activeTab } = this.props;
    let answeredQuestionIds = {};
    if (authedUser) {
      answeredQuestionIds = authedUser.answers;
    }
    const answeredQuestions = [];
    const unansweredQuestions = [];
    for (let [questionId, question] of Object.entries(questions)) {
      if (answeredQuestionIds.hasOwnProperty(questionId)) {
        answeredQuestions.push(question);
      } else {
        unansweredQuestions.push(question);
      }
    }
    let visibleQuestions =
      activeTab === 'unanswered' ? unansweredQuestions : answeredQuestions;
    visibleQuestions = visibleQuestions.sort(
      (a, b) => b.timestamp - a.timestamp
    );
    let placeholder =
      activeTab === 'unanswered'
        ? 'You have answered all available questions!'
        : 'You have not answered any questions.';
    return (
      <div className="questions">
        {visibleQuestions.map((question, idx) => (
          <Link key={question.id} to={`/question/${question.id}`}>
            <div className="question-container">
              <div className="question">Would you rather:</div>
              <div className="question">
                {new Date(question.timestamp).toDateString()}
              </div>
              <div className="option-1">{question.optionOne.text}</div>
              <div className="option-divider">OR</div>
              <div className="option-2">{question.optionTwo.text}</div>
            </div>
          </Link>
        ))}
        {!visibleQuestions.length && (
          <div className="placeholder">{placeholder}</div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  return {
    authedUser: users[authedUser],
    questions
  };
}

export default connect(mapStateToProps)(Questions);
