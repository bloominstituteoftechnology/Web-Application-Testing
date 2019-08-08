import React, { useState } from "react";
import './App.css';
import  ScoreboardDash  from './ScoreboardDash';
import  ScoreboardDisplay  from './ScoreboardDisplay';

function App() {

  let [strikeCount, setStrikeCount] = useState(0);
  const incrementStrikeCount = () => setStrikeCount(strikeCount + 1);
  const resetStrikeCount = () => setStrikeCount(0);
  let [ballCount, setBallCount] = useState(0);
  const incrementBallCount = () => setBallCount(ballCount + 1);
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
              resetBallCount={resetBallCount}
              resetStrikeCount={resetStrikeCount}
        />
            
    </div>
  );
}

export default App;
