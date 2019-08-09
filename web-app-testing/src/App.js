import React, { useState } from "react";
import './App.css';
import  ScoreboardDash  from './ScoreboardDash';
import  ScoreboardDisplay  from './ScoreboardDisplay';

function App() {

  const [pitchCount, setPitchCount] = useState(0);
  let [strikeCount, setStrikeCount] = useState(0);
  const incrementStrikeCount = () => (
    strikeCount < 3 ? setStrikeCount(strikeCount++) : resetStrikeCount();
    setPitchCount(pitchCount++)
    );
  const resetStrikeCount = () => setStrikeCount(0);
  let [ballCount, setBallCount] = useState(0);
  const incrementBallCount = () => setBallCount(ballCount + 1);
  const resetBallCount = () => setBallCount(0);
  const handleFoul = () => {
    if (strikeCount >=2) {
      console.log("Can't have more than two strikes")
    } else setStrikeCount(strikeCount+1)
  }

  return (
    <div className="App">
      <h1>Baseball Scoreboard</h1> 
      <ScoreboardDisplay 
        strikeCount={strikeCount}
        ballCount={ballCount}
        pitchCount={pitchCount}
      />
      <ScoreboardDash 
              strikeCount={strikeCount}
              incrementStrikeCount={incrementStrikeCount}
              ballCount={ballCount}
              incrementBallCount={incrementBallCount}
              resetBallCount={resetBallCount}
              resetStrikeCount={resetStrikeCount}
              handleFoul={handleFoul}
        />
            
    </div>
  );
}

export default App;
