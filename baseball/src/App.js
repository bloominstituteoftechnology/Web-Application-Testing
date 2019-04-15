import React, { Component } from 'react';

import Display from './components/Display';
import Dashboard from './components/Dashboard';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balls: 0,
      strikes: 0,
    };
  }

  ballIncrease = e => {
    this.setState(prevState => {
      return {
        balls: prevState.balls + 1,
      }
    })
  };

  strikeIncrease = e => {
    this.setState(prevState => {
      return {
        strikes: prevState.strikes + 1,
      }
    })
  };

  hitButton = e => {
    this.setState({
      balls: 0,
      strikes: 0,
    })
  };

  componentDidUpdate = (prevProps, prevState) => {
    if((this.state.balls > 3) || (this.state.strikes > 2)) {
      this.setState({
        balls: 0,
        strikes: 0,
      })
    };
  };

  render() {
    return (
      <div className="App">
      <Display ballCount = {this.state.balls} strikeCount = {this.state.strikes} />
      <Dashboard ballAction = {this.ballIncrease} strikeAction = {this.strikeIncrease} foulAction = {this.ballIncrease} hitAction = {this.hitButton} />
      </div>
    )
  }
}
export default App;
