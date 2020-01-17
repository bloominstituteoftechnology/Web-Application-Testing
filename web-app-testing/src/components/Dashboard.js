import React from 'react';

function Dashboard(props) {
  return(
    <div>
      <button onClick={props.addStrike}>Strike</button>
      <button onClick={props.addBall}>Ball</button>
      <button onClick={props.foul}>Foul</button>
      <button onClick={props.hit}>Hit</button>
    </div>
  )}

export default Dashboard;