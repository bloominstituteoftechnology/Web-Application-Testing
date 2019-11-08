import React, {useState} from 'react';
import {Display} from './components/Display';
import { Dashboard } from './components/Dashboard';
import './App.css';

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const addBall = () => {
    setBalls(balls + 1);
  }

  const addStrike = () => {
    setStrikes(strikes + 1);
  }

  const reset = () => {
    setBalls(0);
    setStrikes(0);
  }

  return (
    <div className="App">
      <Display balls={balls} strikes={strikes}/>
      <Dashboard
        balls={balls}
        strikes={strikes}
        addBall={addBall}
        addStrike={addStrike}
        reset={reset}
      />
    </div>
  );
}

export default App;
