import React from "react";

export const Tracker = ({ state }) => {
  const { batting } = state;
  return (
    <div className="tracker-wrapper">
      <h2>Team: {batting.team}</h2>
      <h2>Batting: {batting.player}</h2>
    </div>
  );
};
