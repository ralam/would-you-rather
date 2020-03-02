import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { handleInitialData } from '../../actions/shared';
import Home from '../home/Home';
import Login from '../login/Login';
import Question from '../question/Question';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authedUser } = this.props;
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/question/:id" component={Question} />
        <Login />
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(App);
