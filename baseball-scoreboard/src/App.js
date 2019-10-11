import React, { useState } from 'react';
import Display from './Display';
import Dashboard from './Dashboard'; 
import './App.css';

function App() {
  const { stats, ...buttons } =useBaseball();

  return(
    <>
    <Display stats={stats} />
    <Dashboard buttonFunctions={buttons} />
    </>
  )
}

  // const [strikes, setStrikes] = useState(0);
  // const [balls, setBalls] = useState(0);
  // const [fouls, setFouls] = useState(0);
  // const [hit, setHit] = useState(false);

  // return (
  //   <div className="App">
  //     <Display
  //     ballCount={balls}
  //     strikeCount={strikes}
  //     />
  //     <Dashboard 
  //       strikes={strikes}
  //       setStrikes={setStrikes}
  //       balls={balls}
  //       setBalls={setBalls}
  //       fouls={fouls}
  //       setFouls={setFouls}
  //       hit={hit}
  //       setHit={setHit}
    
  //   </div>
  // );

export default App;
