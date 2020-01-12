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
          <p>Strikes: {homeTeamRecord.strikes.total}</p>
          <p>Balls: {homeTeamRecord.balls.total}</p>
          <p>Fouls: {homeTeamRecord.fouls.total}</p>
          <p>
            Hits: {homeTeamRecord.hits.total}
            {homeTeamRecord.hits.inning.map(e => (
              <span>{e}</span>
            ))}
          </p>
          <p>Runs: {homeTeamRecord.runs.total}</p>
          <p>Errors: {homeTeamRecord.errors.total}</p>
        </div>

        <div className="record-away">
          <h3>Away Team</h3>
          <p>Strikes: {visitorTeamRecord.strikes.total}</p>
          <p>Balls: {visitorTeamRecord.balls.total}</p>
          <p>Fouls: {visitorTeamRecord.fouls.total}</p>
          <p>
            Hits: {visitorTeamRecord.hits.total}
            {visitorTeamRecord.hits.inning.map(e => (
              <span>{e}</span>
            ))}
          </p>
          <p>Runs: {visitorTeamRecord.runs.total}</p>
          <p>Errors: {visitorTeamRecord.errors.total}</p>
        </div>
      </div>
    </>
  );
};
