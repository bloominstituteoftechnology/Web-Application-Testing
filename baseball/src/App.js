import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    balls: 0,
    strikes: 0,
    fouls: 0,
    hits: 0,
  }

  raise = (e) => {
    
    let newValue = ++e.target.value
    this.setState(
      ({
        [e.target.name] : newValue
      })
    )
  }

  render() {
    return (
      <div className="App">

        <h1>Baseball is utterly thrilling</h1>

        <h3>Balls: {this.state.balls}</h3>

        <h3>Strikes: {this.state.strikes}</h3>

        <h5>You control the game</h5>

        <div>
          <button name="balls" onClick={this.raise}>Hit</button>
        </div>

      </div>
    );
  }
}

export default App;
