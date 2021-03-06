import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { handleInitialData } from '../../actions/shared';
import Home from '../home/Home';
import LoginModal from '../loginModal/LoginModal';
import Question from '../question/Question';
import Leaderboard from '../leaderboard/Leaderboard';
import NewPoll from '../newPoll/NewPoll';
import NavBar from '../navbar/NavBar';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <NavBar />
        <Route path="/" exact component={Home} />
        <Route path="/leaderboard" exact component={Leaderboard} />
        <Route path="/add" exact component={NewPoll} />
        <Route path="/question/:id" component={Question} />
        <LoginModal />
      </Router>
    );
  }
}

export default connect()(App);
