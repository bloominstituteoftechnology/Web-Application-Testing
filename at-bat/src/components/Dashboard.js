import React from 'react';

 const Dashboard = ({ strike, ball, foul, hit }) => {
  return (
    <div className="dashboard">
      <button onClick={strike}>Strike</button>
      <button onClick={ball}>Ball</button>
      <button onClick={foul}>Foul</button>
      <button onClick={hit}>Hit</button>
    </div>
  );
};

 export default Dashboard;