import React from "react";

 const Dashboard = props => {
  return (
    <div>
      <button data-testid="strike" onClick={props.onStrike}>
        strike
      </button>
      <button data-testid="ball" onClick={props.onBall}>
        ball
      </button>
      <button data-testid="foul" onClick={props.onFoul}>
        foul
      </button>
      <button data-testid="hit" onClick={props.onHit}>
        hit
      </button>
    </div>
  );
};

 export default Dashboard;


 