import React from "react";

import "../App.css";

const Display = props => {
  return (
    <div>
      <h1>Display</h1>
      <div>Balls {props.balls}</div>
      <div>Strikes {props.strikes}</div>
    </div>
  );
};

export default Display;
