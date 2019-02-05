import React, { Component } from 'react';
import Display from './components/Display';
import './App.css';


class App extends Component {
  state={
    balls: 0,
    strikes: 2,
    fouls: 3
  }
  render() {
    return (
      <div className="App">
        <Display fouls={this.state.fouls} balls={this.state.balls} strikes={this.state.strikes}/>
      </div>
    );
  }
}

export default App;
