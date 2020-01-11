import React, { Component } from "react";
import { Display } from "./components/Display";
import { Dashboard } from "./components/Dashboard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      strikes: 0,
      balls: 0,
      fouls: 0,
      hits: 0
    };
  }

  componentDidUpdate() {
    // console.log("Component Updated");
    console.log("state", this.state);
    if (this.state.strikes === 3 || this.state.balls === 4) {
      this.setState({
        balls: 0,
        strikes: 0
      });
    }
  }

  strikeHandler = evt => {
    console.log("strike");
    this.setState({
      strikes: this.state.strikes + 1
    });
  };

  ballHandler = evt => {
    console.log("ball");
    this.setState({
      balls: this.state.balls + 1
    });
  };

  foulHandler = evt => {
    console.log("foul");
    if (this.state.strikes === 0) {
      this.setState({
        strikes: 1,
        fouls: this.state.fouls + 1
      });
    } else if (this.state.strikes === 1) {
      this.setState({
        strikes: 2,
        fouls: this.state.fouls + 1
      });
    } else {
      this.setState({
        fouls: this.state.fouls + 1
      });
    }
  };

  hitHandler = evt => {
    console.log("hit");
    this.setState({
      strikes: 0,
      balls: 0,
      hits: this.state.hits + 1
    });
  };

  resetHandler = evt => {
    this.setState({
      strikes: 0,
      balls: 0,
      fouls: 0,
      hits: 0
    });
  };

  render() {
    return (
      <div className="App">
        <Display state={this.state} />
        <Dashboard
          strike={this.strikeHandler}
          ball={this.ballHandler}
          foul={this.foulHandler}
          hit={this.hitHandler}
          reset={this.resetHandler}
        />
      </div>
    );
  }
}

export default App;
