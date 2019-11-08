import React from "react";
import Dashboard from "../Dashboard/Dashboard";

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strikes: 0,
      balls: 0,
      hits: 0,
      foul: 0
    };
  }

  strikeHandler = event => {
    if (this.state.strikes < 3) {
      this.setState({ strikes: this.state.strikes + 1 });
    } else {
      this.setState({ strikes: 0 });
    }
  };

  ballsHandler = event => {
    if (this.state.balls < 4) {
      this.setState({ balls: this.state.balls + 1 });
    } else {
      this.setState({ balls: 0 });
    }
  };

  foulHandler = event => {
    if (this.state.strikes < 2) {
      this.setState({ strikes: this.state.strikes + 1 });
    } else {
      this.setState({ foul: this.state.foul + 1 });
    }
  };

  hitHandler = event => {
    this.setState({ strikes: 0, balls: 0, hits: this.state.hits + 1 });
  };

  render() {
    return (
      <>
        <div>
          <div data-testid="strikeOuts">{this.state.strikes + " Strikes "}</div>
          <div data-testid="ballsTotal">{this.state.balls + " Balls "}</div>
          <div data-testid="hitsTotal">{this.state.hits + " Hits "}</div>
          <div data-testid="foulTotal">{this.state.foul + " Foul "}</div>
        </div>
        <Dashboard
          strikes={this.strikeHandler}
          balls={this.ballsHandler}
          hits={this.hitHandler}
          foul={this.foulHandler}
        />
      </>
    );
  }
}

export default Display;
