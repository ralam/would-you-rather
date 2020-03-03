import React, { Component } from 'react';
import { connect } from 'react-redux';

import './NewPoll.scss';

class NewPoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionOne: '',
      optionTwo: ''
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
  };

  render() {
    const { optionOne, optionTwo } = this.state;
    return (
      <div class="container">
        <form className="new-question">
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
  }
}

export default connect()(NewPoll);
