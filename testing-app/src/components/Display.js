import React, { Component } from 'react';
import Dashboard from './Dashboard.js';

class Display extends Component {

  state = {
      balls: 0,
      strikes: 0
  }

  ballsHandler = () => {
      if(this.state.balls < 4 ){
          this.setState({
              ...this.state,
              balls: this.state.balls + 1,
              
          })
      }

      if(this.state.balls === 4 || this.state.strikes === 3){
        this.setState({
            balls: 0,
            strikes: 0
        })
      }
  }

  strikesHandler = () => {
    if(this.state.strikes < 3 ){
        this.setState({
            ...this.state,
            strikes: this.state.strikes + 1,
            
        })
    }

    if(this.state.balls === 4 || this.state.strikes === 3){
      this.setState({
          balls: 0,
          strikes: 0
      })
    }
}

foulsHandler = () => {
    if(this.state.strikes < 2 ){
        this.setState({
            ...this.state,
            strikes: this.state.strikes + 1,
            
        })
    }
}

hitHandler = () => {
    this.setState({
        balls: 0,
        strikes: 0
    });
}

  render() {
    return (
      <div >
        <h2>Balls: {this.state.balls}</h2>
        <h2>Strikes: {this.state.strikes}</h2>
        <Dashboard ballsHandler={this.ballsHandler} strikesHandler={this.strikesHandler} foulsHandler={this.foulsHandler} hitHandler={this.hitHandler}/>
      </div>
    );
  }
}

export default Display;