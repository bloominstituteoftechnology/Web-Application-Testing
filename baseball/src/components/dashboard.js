import React, { Component, Fragment } from "react";

import Display from "./display";

export default class dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      strike: 0,
      ball: 0,
      foul: 0,
      hit: 0
    };
  }

  //  adds one and resets strike and ball if it's less than 3.
  strike = e => {
    e.preventDefault();
    if (this.state.strike < 3) {
      this.setState({
        ...this.state,
        strike: this.state.strike + 1
      });
    } else {
      this.setState({
        ...this.state,
        strike: 0,
        ball: 0
      });
    }
  };

  // add one if the ball is less than 4
  ball = e => {
    e.preventDefault();
    if (this.state.ball < 4) {
      this.setState({
        ...this.state,
        ball: this.state.ball + 1
      });
    } else {
      this.setState({
        ...this.state,
        strike: 0,
        ball: 0
      });
    }
  };

  // If less than 2 two goes on forever?
  foul = e => {
    if (this.state.strike < 2) {
      e.preventDefault();
      this.setState({
        ...this.state,
        strike: this.state.strike + 1
      });
    }
  };

  hit = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      hit: this.state.hit + 1
    });
  };

  render() {
    return (
      <Fragment>
        <button onClick={this.strike}>STRIKE</button>
        <button onClick={this.ball}>BALL</button>
        <button onClick={this.foul}>FOUL</button>
        <button onClick={this.hit}>HIT</button>
        <Display
          strike={this.state.strike}
          ball={this.state.ball}
          hit={this.state.hit}
        />
      </Fragment>
    );
  }
}
