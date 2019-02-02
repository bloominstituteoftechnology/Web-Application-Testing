import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    balls: 0,
    strikes: 0,
    fouls: 0,
    hits: 0,
  }

  ball = (e) => {
    let demBalls = this.state.balls;
    if(demBalls < 4){
      this.setState({
        balls: demBalls+1
      })
    } else {
      this.setState({
        balls: 0
      })
    }
  }

  strike = (e) => {
    let demStrikes = this.state.strikes;
    if(demStrikes < 3){
      this.setState({
        strikes: demStrikes+1
      })
    } else {
      this.setState({
        strikes: 0
      })
    }
  }

  foul = (e) => {
    let demFouls = this.state.fouls;
      this.setState({
        fouls: demFouls+1
      })
  }

  hit = (e) => {
      this.setState({
        balls: 0,
        strikes: 0,
        fouls: 0
      })
  }

  render() {
    return (
      <div className="App">

        <h1>Baseball is utterly thrilling</h1>

        <h3>Balls: {this.state.balls}</h3>

        <h3>Strikes: {this.state.strikes}</h3>

        <h3>Fouls: {this.state.fouls}</h3>

        <h3>Hits: {this.state.hits}</h3>

        <h5>You control the game</h5>

        <div>
          <button className="ball" onClick={this.ball}>Ball</button>
          <button className="strike" onClick={this.strike}>Strike</button>
          <button className="foul" onClick={this.foul}>Foul</button>
          <button className="hit" onClick={this.hit}>Hit</button>
        </div>

      </div>
    );
  }
}

export default App;
