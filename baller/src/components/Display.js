import React, { Component } from 'react';
import Dashboard from './Dashboard';


export class Display extends Component {
  constructor() {
    super();
    this.state = {
      balls: 0,
      strikes: 0
    }
  }

  ballHandler = e => {
    e.preventDefault();
    if (this.state.balls < 3) {
      this.setState({
        balls: this.state.balls + 1
      });
    } else if (this.state.balls === 3) {
      this.setState({
        balls: 0,
        strikes: 0
      });
    }
  }

  strikeHandler = e => {
    e.preventDefault();
    if (this.state.strikes < 2) {
      this.setState({
        strikes: this.state.strikes + 1
      });
    } else if (this.state.strikes === 2) {
      this.setState({
        balls: 0,
        strikes: 0
      });
    }
  }

  hitHandler = e => {
    e.preventDefault();
    this.setState({
      balls: 0,
      strikes: 0
    });
  }

  render() {
    return (
      <div>
        <h2>Display</h2>
        <p>Balls Count</p>
        <p data-testid='ballsCount'>{this.state.balls}</p>
        <p>Strikes Count</p>
        <p data-testid='strikesCount'>{this.state.strikes}</p>
        <Dashboard
          ballHandler={this.ballHandler}
          strikeHandler={this.strikeHandler}
          hitHandler={this.hitHandler}
        />
      </div>
    )
  }
}

export default Display;