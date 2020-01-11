import React from "react";

export const Record = ({ teams }) => {
  const homeTeamRecord = teams.home.record;
  const visitorTeamRecord = teams.visitor.record;
  return (
    <>
      <h2 id="game-record-header">Game Record Score Card</h2>
      <div className="record-wrapper">
        <div className="record-home">
          <h3>Home Team</h3>
          <p>Strikes: {homeTeamRecord.hStrikes}</p>
          <p>Balls: {homeTeamRecord.hBalls}</p>
          <p>Fouls: {homeTeamRecord.hFouls}</p>
          <p>
            Hits: {homeTeamRecord.hHits}
            {homeTeamRecord.hHits.map(e => (
              <span>{e}</span>
            ))}
          </p>
          <p>Runs: {homeTeamRecord.hRuns}</p>
          <p>Errors: {homeTeamRecord.hErrors}</p>
        </div>

        <div className="record-away">
          <h3>Away Team</h3>
          <p>Strikes: {visitorTeamRecord.vStrikes}</p>
          <p>Balls: {visitorTeamRecord.vBalls}</p>
          <p>Fouls: {visitorTeamRecord.vFouls}</p>
          <p>
            Hits: {visitorTeamRecord.vHits}
            {visitorTeamRecord.vHits.map(e => (
              <span>{e}</span>
            ))}
          </p>
          <p>Runs: {visitorTeamRecord.vRuns}</p>
          <p>Errors: {visitorTeamRecord.vErrors}</p>
        </div>
      </div>
    </>
  );
};

// hStrikes: 0,
// : 0,
// : 0,
// : [],
// : 0,
// : 0
