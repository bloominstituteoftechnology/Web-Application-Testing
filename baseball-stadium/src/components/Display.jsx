import React from "react";

export const Display = ({ state }) => {
  const { balls, strikes } = state;

  return (
    <>
      <h2 className="display-balls">Balls: {balls}</h2>
      <h2 className="display-strikes">Strikes: {strikes}</h2>
    </>
  );
};
