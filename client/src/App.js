import React, { Component } from "react";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";
import "./App.css";

 class App extends Component {
  state = {
    player: "player1",
    balls: 0,
    strikes: 0
  };
  handleReset = e => {
    this.setState({
      balls: 0,
      strikes: 0
    });
  };
  handleBall = e => {
    if (this.state.balls < 3) {
      this.setState(prevState => {
        return { balls: prevState.balls + 1 };
      });
    } else this.handleReset(e);
  };
  handleStrike = e => {
    if (this.state.strikes < 2) {
      this.setState(prevState => {
        return { strikes: prevState.strikes + 1 };
      });
    } else {
      this.handleReset(e);
    }
  };
  handleFoul = e => {
    if (this.state.strikes < 2) {
      this.setState(prevState => {
        return { strikes: prevState.strikes + 1 };
      });
    }
  };
  handleHit = e => {
    this.handleReset(e);
  };

   render() {
    return (
      <div className="App">
        <header className="App-header">
          <Display reset={this.handleReset} atBat={this.state} />
          <Dashboard
            onBall={this.handleBall}
            onStrike={this.handleStrike}
            onFoul={this.handleFoul}
            onHit={this.handleHit}
          />
        </header>
      </div>
    );
  }
}

 export default App;