import React from "react";

const Display = props => {
  const { strike, balls } = props;
  return (
    <div>
      <h4>Ball score: {balls}</h4>
      <h4>Strike score: {strike}</h4>
    </div>
  );
};

export default Display;