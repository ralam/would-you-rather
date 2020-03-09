import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './NavBar.scss';

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="nav-item">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-item">
          <Link to="/leaderboard">Leaderboard</Link>
        </div>
        <div className="nav-item">
          <Link to="/add">Create new poll</Link>
        </div>
      </div>
    );
  }
}

export default connect()(NavBar);
