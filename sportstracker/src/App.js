import React, { Component } from 'react';
import './App.css';
import Display from './Display';
import Dashboard from './Dashboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balls: 0,
      strikes: 1
    }}

    ball = () => {
      if (this.state.balls < 3) {
        this.setState({ balls: this.state.balls + 1 });
      } else {
        this.setState({ balls: 0, strikes: 0 });
      }
    }

  render() {
    return (
      <div className="App">
        <Display balls={this.state.balls} strikes={this.state.strikes}/>
        <Dashboard ballClick={this.ball.bind(this)} />
      </div>
    );
  }
}

export default App;
