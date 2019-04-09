import React from "react";

 const Display = props => {
  const { player, balls, strikes } = props.atBat;
  return (
    <>
      <h2 data-testid="player">At-bat: {player}</h2>
      <h2 data-testid="balls">Balls: {balls}</h2>
      <h2 data-testid="strikes">Strikes: {strikes}</h2>
    </>
  );
};

 export default Display;