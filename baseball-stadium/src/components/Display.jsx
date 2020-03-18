import React from "react";

export const Display = ({ state }) => {
  const { batting, ball, strike, inning, out, homeScore, visitorScore } = state;

  return (
    <div className="display-wrapper">
      <div className="tracker-wrapper">
        <h2>At Bat: {batting.player}</h2>
        <h1>Lambda Elites</h1>
        <h2>Team: {batting.team}</h2>
      </div>
      <div className="display-row1 display-row">
        <h2 className="display-visitor display">Visitor: {visitorScore}</h2>
        <h2 className="display-inning display">Inning: {inning}</h2>
        <h2 className="display-home display">Home: {homeScore}</h2>
      </div>
      <div className="display-row2 display-row">
        <h2 className="display-balls display">Balls: {ball}</h2>
        <h2 className="display-strikes display">Strikes: {strike}</h2>
        <h2 className="display-outs display">Outs: {out}</h2>
      </div>
    </div>
  );
};
