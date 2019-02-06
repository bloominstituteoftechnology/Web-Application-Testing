import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Display from './display/display';
import Dashboard from './dashboard/dashboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balls: 0,
      strikes: 0,
    };
  }

  ballIncrement = e => {
    this.setState(prevState => {
      return {
        balls: prevState.balls + 1,
      }
    })
  };
  strikeIncrement = e => {
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
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Display ballCount = {this.state.balls} strikeCount = {this.state.strikes} />
        <Dashboard ballAction = {this.ballIncrement} strikeAction = {this.strikeIncrement} foulAction = {this.ballIncrement} hitAction = {this.hitButton} />
      </div>
    );
  }
}

export default App;
