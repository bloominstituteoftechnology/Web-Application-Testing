import React, { Component } from "react";

import Display from "./components/Display";
import Dashboard from "./components/Dashboard";
import "./App.css";

const cl = console.log;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strikes: 0,
      balls: 0,
    };
  }

  checkIfFoulIsStrike = () => {
    if (this.state.strikes < 2) {
      return 1;
    } else return 0;
  };

  resetCounter = () => {
    this.setState({
      balls: 0,
      strikes: 0
    });
  };

  handleFoulBall = () => {
    this.setState(prevState => {
      return { strikes: prevState.strikes + this.checkIfFoulIsStrike() };
    });
  };

  handleStrike = () => {
    if (this.state.strikes < 2) {
      this.setState(prevState => {
        return { strikes: prevState.strikes + 1 };
      });
    } else this.resetCounter();
  };

  handleBall = () => {
    if (this.state.balls < 3) {
      this.setState(prevState => {
        return { balls: prevState.balls + 1 };
      });
    } else this.resetCounter();
  };

  render() {
    return (
      <div className="App">
        <h1 className="heading">Baseball is neet!</h1>
        <Display balls={this.state.balls} strikes={this.state.strikes} />
        <Dashboard
          handleBall={this.handleBall}
          handleFoulBall={this.handleFoulBall}
          handleStrike={this.handleStrike}
          reset={this.resetCounter}
        />
      </div>
    );
  }
}

export default App;
