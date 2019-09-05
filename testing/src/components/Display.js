import React from "react";

const Display = player => {
  return (
    <div>
      <h1>ScoreBoard</h1>
      <div className="scoreBoard">
        <div className="score">
          <h2 className="home">
            Home Score: <br />
            <span className="points">{player.homeScore}</span>
          </h2>
          <h2 className="away">
            Away Score: <br />
            <span className="points">{player.awayScore}</span>
          </h2>
        </div>
        <hr />
        <h3>Total Hits: {player.hits}</h3>
        <hr />
        <h3>Ball: {player.ball}</h3>
        <hr />
        <h3>Strike: {player.strike}</h3>
      </div>
    </div>
  );
};

export default Display;
