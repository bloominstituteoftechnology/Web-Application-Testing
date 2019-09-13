import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

function App() {
  const [ balls, setBalls ] = useState(0);
  const [ strikes, setStrikes ] = useState(0);
  const [ fouls, setFouls ] = useState(0);
  const [ hits, setHits ] = useState(0);

  return (
    <div className="App">
      <Display props={{
        balls,
        setBalls,
        strikes,
        setStrikes,
        fouls,
        setFouls,
        hits,
        setHits
      }} />
      <Dashboard props={{
        balls,
        setBalls,
        strikes,
        setStrikes,
        fouls,
        setFouls,
        hits,
        setHits
      }} />
    </div>
  );
}

export default App;
