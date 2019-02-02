import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Display from './Components/Display/Display';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <Display />
        </header>
      </div>
    );
  }
}

export default App;
