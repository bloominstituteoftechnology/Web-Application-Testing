import React, { useState } from 'react';
import Display from './components/Display';
import Dashboard from './components/Dashboard';
import './App.css';


function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [atBat, setAtBat] = useState(1);
  
  return (
    <div className="App">
      <Display balls={balls} strikes={strikes} atBat={atBat} />
      <Dashboard 
        balls={balls} 
        strikes={strikes} 
        setBalls={setBalls} 
        setStrikes={setStrikes} 
        atBat={atBat} 
        setAtBat={setAtBat} />
    </div>
  );
}

export default App;
