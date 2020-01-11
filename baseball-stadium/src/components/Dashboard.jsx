import React from "react";

export const Dashboard = ({ strike, ball, foul, hit, reset }) => {
  return (
    <>
      <button onClick={strike} className="dashboard-btn-strike">
        Strike
      </button>
      <button onClick={ball} className="dashboard-btn-ball">
        Ball
      </button>
      <button onClick={foul} className="dashboard-btn-foul">
        Foul
      </button>
      <button onClick={hit} className="dashboard-btn-hit">
        Hit
      </button>
      <button onClick={reset} className="dashboard-btn-reset">
        Reset
      </button>
    </>
  );
};
