import React, { useState } from 'react';
import './App.css';


import Display from './components/display.js';
import Dashboard from './components/dashboard.js';


function App() {

  const [ homeHits, setHomeHits] = useState(0);
  const [ awayHits, setAwayHits] = useState(0);
  const [ balls, setBalls] = useState(0);
  const [ strikes, setStrikes] = useState(0);
  const [ outs, setOuts] = useState(0);
  const [ whosUp, setWhosUp] = useState('Home'); //determines if home(1) or away(2) is up;
  const [ innings, setInnings] = useState(1);





  return (
    <div className="container">
      <Display
        homeHits = {homeHits}
        awayHits = {awayHits}
        balls = {balls}
        strikes = {strikes}
        outs = {outs}
        whosUp = {whosUp}
        innings = {innings}

      />
      <Dashboard
        setHomeHits = {setHomeHits}
        setAwayHits = {setAwayHits}
        setBalls = {setBalls}
        setStrikes = {setStrikes}
        setOuts = {setOuts}
        setWhosUp = {setWhosUp}
        setInnings = {setInnings}
        balls = {balls}
        strikes = {strikes}
        outs = {outs}
        whosUp = {whosUp}
        homeHits = {homeHits}
        awayHits = {awayHits}
      />


    </div>
  );
}

export default App;