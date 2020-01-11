import React from "react";

export const Dashboard = ({ strike, ball, foul, hit, reset }) => {
  return (
    <div className="dashboard-wrapper">
      {/* Row 1 */}
      <div className="dashboard-row1">
        <button
          onClick={strike}
          className="dashboard-btn-strike"
          data-testid="strikeBtn"
        >
          Strike
        </button>
        <button onClick={ball} className="dashboard-btn-ball">
          Ball
        </button>
        <button onClick={foul} className="dashboard-btn-foul">
          Foul
        </button>
      </div>
      {/*! Row 2 */}
      <div className="dashboard-row2">
        <button onClick={hit} className="dashboard-btn-hit">
          Hit
        </button>
        <div className="dashboard-btn-runs">
          <button className="dashboard-btn-hitSingle">Single</button>
          <button className="dashboard-btn-hitDouble">Double</button>
          <button className="dashboard-btn-hitTriple">Triple</button>
        </div>
        <button onClick={reset} className="dashboard-btn-reset">
          Reset
        </button>
      </div>
    </div>
  );
};
