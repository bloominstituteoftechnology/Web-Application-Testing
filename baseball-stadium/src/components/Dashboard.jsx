import React from "react";

export const Dashboard = ({
  strike,
  ball,
  foul,
  error,
  single,
  double,
  triple,
  homeRun,
  reset
}) => {
  return (
    <div className="dashboard-wrapper">
      {/* Row 1 */}
      <div className="dashboard-row1 dashboard-row">
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
        <button onClick={error} className="dashboard-btn-error">
          Error
        </button>
        <button onClick={reset} className="dashboard-btn-reset">
          Reset
        </button>
      </div>
      {/*! Row 2 */}
      <div className="dashboard-row2 dashboard-row">
        {/* <div className="dashboard-btn-runs"> */}
        <button onClick={single} className="dashboard-btn-hitSingle">
          Single
        </button>
        <button onClick={double} className="dashboard-btn-hitDouble">
          Double
        </button>
        <button onClick={triple} className="dashboard-btn-hitTriple">
          Triple
        </button>
        <button onClick={homeRun} className="dashboard-btn-hit">
          Home Run
        </button>
        {/* </div> */}
      </div>
    </div>
  );
};
