import React, { Component } from 'react';
import './App.css';
import Display from './components/Display';

class App extends Component {
  constructor() {
    super();

    this.state = {
      strike: 0,
      ball: 0,
      foul: 0,
      hit: 0,
    }
  }

  handleStrikes = (e) => {
    e.preventDefault();
    if (this.state.strikes < 3) {
      this.state.strikes++;
    } else if (this.state.strikes === 3 || this.state.strikes > 3) {
      this.state.strikes === 0;
      this.state.balls === 0;
    }
  }

  handleBalls = (e) => {
    e.preventDefault();
    if (this.state.balls < 4) {
      this.state.balls++;
    } else if (this.state.balls === 4 || this.state.balls > 4) {
      this.state.strikes === 0;
      this.state.balls === 0;
    }
  }

  render() {
    return (
      <div className="App">
        <Display 
          handleBalls={this.handleBalls}
          handleStrikes={this.handleStrikes}
        />
      </div>
    );
  }
}

export default App;
