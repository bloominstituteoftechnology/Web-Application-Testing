import React, { useState } from "react";
import Dashboard from './components/Dashboard/Dashboard';
import Display from './components/Display/Display';
import logo from './logo.svg';
import './App.css';

export const addStrike = (count) => {
  return count + 1;
}

export const addFoul = (count) => {
  if (foul < 2 && strike < 2) {
    return count + 1;
  } 
}

export const addBall = (count) => {
  if (foul < 2 && strike < 2) {
    return count + 1;
  }
}

export const addHit = (count) => {
  if (foul < 2 && strike < 2) {
      return count + 1;
  }
}

function App() {

  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [foul, setFoul] = useState(0);
  const [hit, setHit] = useState(0);

  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <Display strike={strike} ball={ball}/>
      <Dashboard strike={strike} setStrike={setStrike} ball={ball} 
      setBall={setBall} foul={foul} setFoul={setFoul} hit={hit} 
      setHit={setHit}/>
    </div>
  );
}

export default App;
