import React, { Component } from 'react';
import './App.css';

class Display extends Component {

  state = {
      balls: 0,
      strikes: 0
  }

  render() {
    return (
      <div >
        <h2>Balls: {this.state.balls}</h2>
        <h2>Strikes: {this.state.strikes}</h2>
      </div>
    );
  }
}

export default Display;