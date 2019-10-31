import React from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Components/Display'
//test
export const sum = (a,b) => a + b;

function App() {
  return (
    <div className="App">
      <header>
        <h1>BaseBall Tracker</h1>
        <Display />

      </header>
    </div>
  );
}

export default App;
