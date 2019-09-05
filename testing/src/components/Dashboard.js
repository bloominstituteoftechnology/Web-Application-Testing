import React, { useState } from "react";
import Display from "./Display";

//function to add 1 to the Strikes
export const addStrike = currentStrikes => {
  return currentStrikes + 1;
};

//function to add 1 to the Balls
export const addBall = currentBalls => {
  return currentBalls + 1;
};

//function to add 1 to the hits
export const addHits = currentHits => {
  return currentHits + 1;
};

export const addHomeScore = currentHomeScore => {
  return currentHomeScore + 1;
};

export const addAwayScore = currentAwayScore => {
  return currentAwayScore + 1;
};

const Dashboard = () => {
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [hits, setHits] = useState(0);
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  // if strike is equal to or less then 2 {strike + 1}
  //else do nothing
  function playerFoul() {
    if (strike <= 1) return setStrike(addStrike(strike));
  }

  //if Strike is equal or less then 1 {strike + 1}
  // else reset balls and strike
  function playerStrike() {
    setStrike(addStrike(strike));
    if (strike === 2) {
      return setStrike(0), setBall(0);
    }
  }

  // if ball is 2 or less {ball +1}
  //Else reset balls and strike
  function playerBall() {
    setBall(addBall(ball));
    if (ball === 3) {
      return setStrike(0), setBall(0);
    }
  }

  //reset all and increase hits
  function playerHit() {
    setStrike(0);
    setBall(0);
    setHits(addHits(hits));
  }

  function homePoint() {
    setHomeScore(addHomeScore(homeScore));
  }

  function awayPoint() {
    setAwayScore(addAwayScore(awayScore));
  }
  return (
    <div>
      <Display
        hits={hits}
        ball={ball}
        strike={strike}
        homeScore={homeScore}
        awayScore={awayScore}
      />
      <h1>DashBoard</h1>
      <div>
        <button onClick={playerStrike}>strike</button>

        <button onClick={playerBall}>ball</button>
        <button onClick={playerFoul}>foul </button>
        <button onClick={playerHit}>hit</button>
      </div>
      <div>
        <button onClick={homePoint}>Home Score</button>
        <button onClick={awayPoint}>Away Score</button>
      </div>
    </div>
  );
};

export default Dashboard;
