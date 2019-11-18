import React, {
  Fragment,
  useState,
} from "react";

const useScoreboard = () => {
  const [strikeScore, setStrikeScore] = useState(0);
  const [ballScore, setBallScore] = useState(0);
  const [foulScore, setFoulScore] = useState(0);
  const [hitScore, setHitScore] = useState(0);

  const updateScore = (stat, points = 0) => {
    if (stat === "strike") setStrikeScore(score => score + points);
    if (stat === "ball") setBallScore(score => score + points);
    if (stat === "foul") setFoulScore(score => score + points);
    if (stat === "hit") setHitScore(score => score + points);
  };


  return {
    strikeScore,
    ballScore,
    foulScore,
    hitScore,
    updateScore,
  };
};


const App = () => (
  <Fragment>
    <CustomScoreboard />
  </Fragment>
);

const CustomScoreboard = () => {
  const {
    strikeScore,
    ballScore,
    foulScore,
    hitScore,
    updateScore,
    } = useScoreboard();

  return (
    <Scoreboard title="Batter Stats Scoreboard">
      <Stat name="Strike" score={strikeScore} updateScore={updateScore} />
      <Stat name="Ball" score={ballScore} updateScore={updateScore} />
      <Stat name="Foul" score={foulScore} updateScore={updateScore} />
      <Stat name="Hit" score={hitScore} updateScore={updateScore} />
    </Scoreboard>
  );
};

const Scoreboard = ({ title, children }) => {
  return (
    <div className="scoreboard">
      <h2>{title}</h2>
      <div className="scoreboard-content">{children}</div>
    </div>
  );
};

const Stat = ({ name, score, updateScore }) => {
  return (
    <div className="scoreboard-block">
      <h3>{name}</h3>
      <span>{score}</span>
      <div>
        <button onClick={() => updateScore(name, -1)}>Delete</button>
        <button onClick={() => updateScore(name, +1)}>Add</button>
      </div>
    </div>
  );
};


export default App;

