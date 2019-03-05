import React, { Component } from 'react';
import './App.css';

import Display from "./Display/Display.js";
import Dashboard from "./Dashboard/Dashboard.js";

class App extends Component {
  state = {
    strikes: 0,
    balls: 0,
    fouls: 0,
  }

  Strike = () => {
    let strikes = this.state.strikes + 1;
    if (strikes > 2) {
      this.out();
    } else {
      this.setState({
        strikes: strikes
      })
    }

  };

  Ball = () => {
    let balls = this.state.balls + 1;
    if (balls > 3) {
      this.out();
    } else {
      this.setState({
        balls: balls
      })
    }
  };

  Foul = () => {
    this.setState({
      fouls: this.state.fouls + 1
    })
  };

  Hit = () => {
    this.setState({
      strikes: 0,
      balls: 0,
      fouls: 0,
    })
  };

  out = () => {
    this.setState({
      strikes: 0,
      balls: 0,
      fouls: 0,
    })
  }

  call = func => {
    switch (func) {
      case 'Strike':
        this.Strike();
        break;
      case 'Ball':
        this.Ball();
        break;
      case 'Foul':
        this.Foul();
        break;
      case 'Hit':
        this.Hit();
        break;
    }


  }

  render() {
    return (
      <div className="App">
        <Display {...this.state} />
        <Dashboard {...this.state} call={this.call} />
      </div>
    );
  }
}

export default App;
