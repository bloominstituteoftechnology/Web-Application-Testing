import React from "react";

export const Roster = ({ teams }) => {
  const homeTeam = teams.home.players;
  const visitorTeam = teams.visitor.players;

  return (
    <div className="roster-wrapper">
      <div className="roaster-home team-column">
        <h3>Home Team</h3>
        <ol>
          {homeTeam.map(player => (
            <li key={player}>{player}</li>
          ))}
        </ol>
      </div>
      <div className="roaster-away team-column">
        <h3>Visitor Team</h3>
        <ol>
          {visitorTeam.map(player => (
            <li key={player}>{player}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};
