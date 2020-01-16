import React from "react";

function Dashboard({ handleDisplay }) {
  return (
    <div>
      <h1>Play Ball!</h1>
      <div className="buttons-container">
        <div className="buttons-bar">
          <button onClick={() => handleDisplay("strike")}>STRIKE</button>
          <button onClick={() => handleDisplay("ball")}>BALLS</button>
          <button onClick={() => handleDisplay("foul")}>FOULS</button>
          <button onClick={() => handleDisplay("hit")}>HITS</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
