import React, { useState } from 'react';
import Display from './components/Display.js'
import Dashboard from './components/Dashboard.js'
import './App.css';

export const addStrike = currentStrikes => {
  return currentStrikes + 1;
}

export const addBall = currentBalls => {
  return currentBalls + 1;
}

function App() {
  const [ strikes, setStrikes ] = useState(0);
  const [ balls, setBalls ] = useState(0);

  const handleStrike = () => {
    if(strikes < 2)
      setStrikes(addStrike(strikes));
    else
      setStrikes(0);
  };

  const handleFoul= () => {
    if(strikes < 2)
      setStrikes(strikes + 1);
  };

  const handleBall = () => {
    if(balls < 3)
      setBalls(addBall(balls));
    else
      setBalls(0);
  };

  const handleHit = () => {
      setBalls(0);
      setStrikes(0);
  };


  return (
    <div className="App">
      <Display strikes={strikes} balls={balls}/>
      <Dashboard handleStrike={handleStrike} handleFoul={handleFoul} handleBall={handleBall} handleHit={handleHit}/>
    </div>
  );
}

export default App;
