import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

class Question extends Component {
  render() {
    const { user, questions, match } = this.props;
    const id = match.params.id;
    const question = questions[id];
    return (
      <div>
        {question && (
          <div>
            <div>{question.id}</div>
            <div>user</div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  return {
    questions,
    user: users[authedUser]
  };
}

export default connect(mapStateToProps)(Question);
