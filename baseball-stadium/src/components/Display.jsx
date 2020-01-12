import React from "react";

export const Display = ({ state }) => {
  const { ball, strike, inning, out, homeScore, visitorScore } = state;

  return (
    <div className="display-wrapper">
      <h1>Lambda Elites</h1>
      <div className="display-row1">
        <h2 className="display-visitor display">Visitor: {visitorScore}</h2>
        <h2 className="display-inning display">Inning: {inning}</h2>
        <h2 className="display-home display">Home: {homeScore}</h2>
      </div>
      <div className="display-row2">
        <h2 className="display-balls display">Balls: {ball}</h2>
        <h2 className="display-strikes display">Strikes: {strike}</h2>
        <h2 className="display-outs display">Outs: {out}</h2>
      </div>
    </div>
  );
};
