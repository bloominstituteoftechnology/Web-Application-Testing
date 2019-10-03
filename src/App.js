import React, { useState } from 'react';
import Display from './Display';
import Dashboard from './Dashboard';

import './App.css';

function App() {
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [hit, setHit] = useState(0);
  const [foul, setFoul] = useState(0);


  return (
    <div className="container">
      <Display 
        strike={strike}
        ball={ball}
        hit={hit} 
        foul={foul} />
      <Dashboard 
        strike={strike} setStrike={setStrike}
        ball={ball} setBall={setBall}
        hit={hit}  setHit={setHit}
        foul={foul} setFoul={setFoul}
        />
    </div>
  );
}

export default App;
