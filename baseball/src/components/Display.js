import React from "react";

const Display = props => {
  return (
    <div>
      <h4>Our Display</h4>
      <p>Balls: {props.balls} </p>
      <p>Strikes: {props.strikes}</p>
    </div>
  );
};

export default Display;
