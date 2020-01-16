import React from "react";

function Display({ stats }) {
  return (
    <div className="display">
      <div>
        <h4>Strikes</h4>
        <h1>{stats.strikes}</h1>
      </div>
      <div>
        <h4>Balls</h4>
        <h1>{stats.balls}</h1>
      </div>
      <div>
        <h4>Hits</h4>
        <h1>{stats.hits}</h1>
      </div>
    </div>
  );
}

export default Display;
