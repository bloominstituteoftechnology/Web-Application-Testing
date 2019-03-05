import React, { Component } from 'react';
import './App.css';
import Display from './components/Display';

class App extends Component {
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <h1>Big Baller</h1>
          <Display />
        </header>
      </div>
    );
  }
}

export default App;