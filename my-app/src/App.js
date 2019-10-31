import React from 'react';
import logo from './logo.svg';
import './App.css';
import StrikeChecker from './Components/StrikeChecker'


function App() {
  return (
    <div className="App">
      <header>
        <h1>BaseBall Tracker</h1>
        <StrikeChecker/>

      </header>
    </div>
  );
}

export default App;
