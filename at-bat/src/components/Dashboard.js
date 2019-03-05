import React from "react";

import "../App.css";

const Dashboard = props => {
  return (
    <div>
      <h1>Dashboard</h1>
      <button className="ball" onClick={props.handleBall}>
        Ball
      </button>
      <button className="strike" onClick={props.handleStrike}>
        Strike
      </button>
      <button className="foul" onClick={props.handleFoulBall}>
        Foul
      </button>
      <button className="hit" onClick={props.reset}>
        Hit
      </button>
    </div>
  );
};

export default Dashboard;
