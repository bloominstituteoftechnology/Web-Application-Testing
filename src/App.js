import React, { useState } from 'react';
import Display from './components/Display';
import Dashboard from './components/Dashboard';
import './App.css';


function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const upBallCount = () => {
    if (balls < 3) {
      setBalls(balls + 1);
    }
    else if (balls === 3) {
      setBalls(0);
      setStrikes(0);
    }
  };

  const upStrikeCount = () => {
    if (strikes < 2) {
      setStrikes(strikes + 1);
    }
    else if (strikes === 2) {
      setStrikes(0);
      setBalls(0);
    }
  };

  return (
    <div className="App">
      <Display balls={balls} strikes={strikes} />
      <Dashboard upBallCount={upBallCount} upStrikeCount={upStrikeCount}/>
    </div>
  );
}

export default App;
