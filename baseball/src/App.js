import React, { Component } from "react";

import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      strikes: 0,
      balls: 0,
      fouls: 0,
      hit: false,
      out: false
    };
  }

  callStrike = e => {
    e.preventDefault();
    const strikes = this.state.strikes + 1;
    this.setState({
      ...this.state,
      strikes: strikes
    });
  };

  callBall = e => {
    e.preventDefault();
    const balls = this.state.balls + 1;
    this.setState({
      ...this.state,
      balls: balls
    });
  };

  callFoul = e => {
    e.preventDefault();
    const fouls = this.state.fouls + 1;
    this.setState({
      ...this.state,
      fouls: fouls
    });
  };

  hit = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      hit: true
    });
  };

  out = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      out: true
    });
  }

  reset = e => {
    e.preventDefault();
    this.setState({
      strikes: 0,
      balls: 0,
      fouls: 0,
      hit: false,
      out: false
    });
  };

  render() {
    return (
      <div className="App">
        <Display stats = {this.state} />
        <Dashboard
          stats = {this.state}
          callStrike = {this.callStrike}
          callBall = {this.callBall}
          callFoul = {this.callFoul}
          hit = {this.hit}
          out = {this.out}
          reset = {this.reset}
        />
      </div>
    );
  }
}

export default App;
