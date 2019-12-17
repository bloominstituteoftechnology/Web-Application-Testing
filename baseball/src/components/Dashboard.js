import React, { useState } from "react";
import Display from "./Display";

const Dashboard = () => {
  const [strikes, setStrike] = useState(0);
  const [balls, setBall] = useState(0);
  const [fouls, setFouls] = useState(0);

  if (strikes >= 3) {
    setStrike(0);
    setBall(0);
  }

  if (balls >= 4) {
    setStrike(0);
    setBall(0);
  }

  const addBall = event => {
    event.preventDefault();
    setBall(balls + 1);
  };

  const addStrike = event => {
    event.preventDefault();
    setStrike(strikes + 1);
  };

  const hit = event => {
    event.preventDefault();
    setStrike(0);
    setBall(0);
  };

  const foulBall = event => {
    event.preventDefault();
    if (strikes === 0) {
      setStrike(1);
      setFouls(1);
    } else if (strikes === 1) {
      setStrike(2);
      setFouls(2);
    } else if (strikes === 2) {
      setStrike(2);
      setFouls(fouls + 1);
    }
  };

  return (
    <div>
      <div>
        <Display balls={balls} strikes={strikes} />
        <h2>Our Dashboard</h2>
        <button onClick={hit}>Hit</button>
        <button onClick={foulBall}>Foul</button>
        <button onClick={addBall}>Ball</button>
        <button onClick={addStrike}>Strike</button>
      </div>
    </div>
  );
};

export default Dashboard;
