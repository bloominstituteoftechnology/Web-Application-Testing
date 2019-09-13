import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

export const addBall = balls => balls + 1;
export const addStrike = strikes => strikes + 1;
export const addFoul = fouls => fouls + 1;
export const addHit = hits => hits + 1;

function App() {
  const [ balls, setBalls ] = useState(0);
  const [ strikes, setStrikes ] = useState(0);
  const [ fouls, setFouls ] = useState(0);
  const [ hits, setHits ] = useState(0);

  return (
    <div className="App">
      <Display props={{
        balls,
        strikes,
        fouls,
        hits
      }} />
      <Dashboard props={{
        setBalls,
        setStrikes,
        setFouls,
        setHits
      }} />
    </div>
  );
}

export default App;
