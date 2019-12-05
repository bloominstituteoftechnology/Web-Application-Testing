import React, {useState} from 'react';

import './App.css';
import Dashboard from './Components/Dashboard';

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] =  useState(0);

  const ball = () => {
    if (balls === 3) {
      setBalls(0)
      setStrikes(0)
    } else {
      setBalls(balls + 1)
    }
  }

  const strike = () => {
    if (strikes === 2) {
      setStrikes(0)
      setBalls(0)
    } else {
      setStrikes(strikes + 1)
    }
  }

  const foul = () => {
    if (strike > 3) {
      setStrikes(strikes + 1)
    } else {
      setStrikes(0)
    }
  }

  const hit = () => {
    setStrikes(0)
    setBalls(0)
  }
  

  return (
    <div className="App">
      <Dashboard ball={ball} strike={strike} hit={hit} foul={foul} />
    </div>
  );
}

export default App;
