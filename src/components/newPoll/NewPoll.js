import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { showAuthModal } from '../../actions/modals';
import { handleAddQuestion } from '../../actions/shared';

import './NewPoll.scss';

class NewPoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionOne: '',
      optionTwo: '',
      toHome: false
    };
  }

  handleChange = (e, optionKey) => {
    const text = e.target.value;
    this.setState(() => ({
      [optionKey]: text
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { optionOne, optionTwo } = this.state;
    const { userId } = this.props;
    this.props.dispatch(handleAddQuestion(optionOne, optionTwo, userId));

    this.setState(() => ({
      optionOne: '',
      optionTwo: '',
      toHome: true
    }));
  };

  showLoginModal = e => {
    e.preventDefault();
    this.props.dispatch(showAuthModal());
  };

  render() {
    const { optionOne, optionTwo, toHome } = this.state;
    const { userId } = this.props;

    if (toHome) {
      return <Redirect to="/" />;
    }

    if (userId) {
      return (
        <div className="container">
          <form className="new-question" onSubmit={this.handleSubmit}>
            <p className="prompt">Add a new question:</p>
            <p className="would-you-rather">Would you rather:</p>
            <input
              type="text"
              id="option-1"
              placeholder="Option 1"
              onChange={e => this.handleChange(e, 'optionOne')}
              value={optionOne}
              required
            />
            <input
              type="text"
              id="option-2"
              placeholder="Option 2"
              onChange={e => this.handleChange(e, 'optionTwo')}
              value={optionTwo}
              required
            />
            <input type="submit" value="Add Question" />
          </form>
        </div>
      );
    } else {
      return (
        <div className="container">
          <p>Please login to add a poll</p>
          <button className="btn login" onClick={this.showLoginModal}>
            Log in
          </button>
        </div>
      );
    }
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    userId: users[authedUser] ? users[authedUser].id : null
  };
}

export default connect(mapStateToProps)(NewPoll);
