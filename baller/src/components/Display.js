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
    this.setState({
      balls: this.state.balls + 1
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
        />
      </div>
    )
  }
}

export default Display;