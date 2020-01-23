import React, {useState} from 'react';
import './App.css';

import { Display } from './components/Display.js';
import { Dashboard } from './components/Dashboard.js'


function App() {
  const [ball, setBall] = useState(0);
  const [strike, setStrke] =  useState(0);

  return (
    <div className="App">
      <Display 
      atBallBall={ball}
      atBallStrike ={strike}
      />
      <Dashboard
      atBallBall={ball}
      atBallStrike ={strike}
      setBall={setBall}
      setStrke={setStrke}
      />
    </div>
  );
}

export default App;
