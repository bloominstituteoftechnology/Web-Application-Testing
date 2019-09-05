import React from "react";

const Dashboard = props => {
  const { Balls, StrikeUp, Hit, Foul } = props;

  return (
    <div>
      <button onClick={StrikeUp}>STRIKE</button>
      <button onClick={Balls}>BALL</button>
      <button onClick={Hit}>HIT</button>
      <button onClick={Foul}>FOUL</button>
    </div>
  );
};

export default Dashboard;