import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import bball from './bball.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={bball} className="App-logo" alt="logo" />
          
        </header>
      </div>
    );
  }
}

export default App;
