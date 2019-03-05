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
    };
  }

  callStrike = e => {
    e.preventDefault();
    if (this.state.strikes === 2) {
      this.out(e);
    } else {
      let strikes = this.state.strikes + 1
      this.setState({
        strikes: strikes
      })
    };
  };

  callBall = e => {
    e.preventDefault();
    if (this.state.balls === 3) {
      this.out();
    } else {
      let balls = this.state.balls + 1;
      this.setState({
        balls: balls
      })
    }
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
      strikes: 0,
      balls: 0,
      fouls: 0,
    })
  };

  out = (e) => {
    // e.preventDefault();
    this.setState({
      strikes: 0,
      balls: 0,
      fouls: 0,
    })
  }

  render() {
    return (
      <div className="App">
        <Display {...this.state} />
        <Dashboard
          {...this.state}
          callStrike = {this.callStrike}
          callBall = {this.callBall}
          callFoul = {this.callFoul}
          hit = {this.hit}
          out = {this.out}
        />
      </div>
    );
  }
}

export default App;
