import React, { useState } from "react";
import './App.css';
import  ScoreboardDash  from './ScoreboardDash';
import  ScoreboardDisplay  from './ScoreboardDisplay';

function App() {

  let [strikeCount, setStrikeCount] = useState(0);
    const incrementStrikeCount = () => setStrikeCount(0);
    const resetStrikeCount = () => setStrikeCount(0);
    let [ballCount, setBallCount] = useState(0);
    const incrementBallCount = () => setBallCount(0);
    const resetBallCount = () => setBallCount(0);

  return (
    <div className="App">
      <h1>Baseball Scoreboard</h1> 
      <ScoreboardDisplay 
        strikeCount={strikeCount}
        incrementStrikeCount={incrementStrikeCount}
        ballCount={ballCount}
        incrementBallCount={incrementBallCount}
      />
      <ScoreboardDash 
              strikeCount={strikeCount}
              incrementStrikeCount={incrementStrikeCount}
              ballCount={ballCount}
              incrementBallCount={incrementBallCount}
        />
            
    </div>
  );
}

export default App;
