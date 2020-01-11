import React from "react";

export const Roster = ({ teams }) => {
  const homeTeam = teams.home.players;
  const visitorTeam = teams.visitor.players;

  return (
    <div className="roster-wrapper">
      <div className="roaster-home">
        <h3>Home Team</h3>
        <ul>
          {homeTeam.map(player => (
            <li key={player}>{player}</li>
          ))}
        </ul>
      </div>
      <div className="roaster-away">
        <h3>Visitor Team</h3>
        <ul>
          {visitorTeam.map(player => (
            <li key={player}>{player}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
