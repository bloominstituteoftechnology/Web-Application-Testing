import React, { useState } from 'react';
import './App.css';

export const addHit = currentScore => {
  return currentScore + 1
};

function App() {
  const [playersScore, setPlayersScore] = useState(0)
  const [foulScore, setFoulScore] = useState(0)
  const [strikeScore, setStrikeScore] = useState(0)
  const [ballScore, setBallScore] = useState(0)

  if (strikeScore > 2) {
    setPlayersScore(3)
    setStrikeScore(0);
  }

  return (
    <div className="Container">
      <section className="scoreboard">
        <div className="home">
          <h2 data-testid="players-header" className="players--name">
            Player
          </h2>

          <div data-testid="players__score" className="players__score">{playersScore}</div>
        </div>
        <div className="time">00:30</div>
        <div className="ball__score">{ballScore}</div>
        <div className="foul__score">{foulScore}</div>
        <div className="strike__score">{strikeScore}</div>


        <div className="button">
          <button onClick={() => setPlayersScore(addHit(playersScore))}
            className="button"
          >
            Player Score
  </button>

          <button
            onClick={() => setBallScore(ballScore + 1)}
            className="button"

          >
            Ball Score
          </button>
          <button
            onClick={() => setFoulScore(foulScore + 1)}
            className="button"

          >Foul Score</button>
          <button
            onClick={() => setStrikeScore(strikeScore + 1)}
            className="button"

          > Strike Score </button>
        </div>
      </section>
    </div>
  );
}

export default App;
