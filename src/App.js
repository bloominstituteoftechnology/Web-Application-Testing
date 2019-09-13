import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

function App() {
  const [ balls, setBalls ] = useState(0);
  const [ strikes, setStrikes ] = useState(0);
  const [ fouls, setFouls ] = useState(0);
  const [ hits, setHits ] = useState(0);

  if ( balls === 4 || strikes === 3 ) {
    setBalls(0);
    setStrikes(0);
  }

  if ( hits === 1 ) {
    setBalls(0);
    setStrikes(0);
    setFouls(0);
  }

  if ( strikes >= 2 ) {
    setFouls(fouls);
  }

  return (
    <div className="App">
      <Display 
        balls={balls} 
        strikes={strikes}
      />
      <Dashboard 
        setBalls={setBalls}
        setStrikes={setStrikes}
        setFouls={setFouls}
        setHits={setHits}
      />
    </div>
  );
}

export default App;
