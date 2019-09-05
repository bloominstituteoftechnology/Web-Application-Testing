import React, { useState } from 'react';
import logo from './logo.svg';

import Display from './components/Display.js';
import Dashboard from './components/Dashboard.js';
import './App.css';

function App() {
  
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  const [outs, setOuts] = useState(0);

  
  const displayReset = () => {
    setStrikes(0);
    setBalls(0);
  }
  
  const addStrikes = () => {
    if(strikes === 2 && outs === 2){
      clear()
    } else if(strikes === 2){
      displayReset()
      setOuts(outs + 1)
    } else {
      return setStrikes(strikes + 1)
    }
  }
  

  const addBall = () => {
    if(balls === 3){
      setBalls(0)
      displayReset()
    } else {
      return setBalls(balls + 1)
    }
  }
  
  const addFoul = () => {
    if(strikes === 2){
      return strikes;
    } else {
      return setStrikes(strikes + 1)
    }
  }

  const addOut = () => {
    if(outs === 2){
      setOuts(0);
      displayReset();
    } else {
      setOuts(outs + 1);
      displayReset();
    }
  }

  const clear = () => {
    displayReset();
    setOuts(0);
  }

  
  
  return (
    <div className="App">
      <Display strikes={strikes} 
               balls={balls}
               outs={outs}
      />
      <Dashboard addStrike={addStrikes}
                 addBall={addBall}
                 addFoul={addFoul}
                 addOut={addOut}
                 reset={displayReset}
                 clear={clear}
      />
    </div>
  );
}

export default App;
