import React from "react";

const Display = player => {
  return (
    <div>
      <h1>ScoreBoard</h1>

      <h3>
        Home Score: {player.homeScore} {"  /  "} Away Score: {player.awayScore}
      </h3>

      <h3>Total Hits: {player.hits}</h3>

      <h3>Ball: {player.ball}</h3>

      <h3>Strike: {player.strike}</h3>

      <hr />
    </div>
  );
};

export default Display;
