import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import Display from './components/display';
import Dashboard from './components/dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
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
        </header>

        <body>
            <Dashboard/>
        </body>

      </div>
    );
  }
}

export default App;
