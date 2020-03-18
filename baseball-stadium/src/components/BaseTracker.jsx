import React from "react";

export const BaseTracker = ({ bases }) => {
  const { base1, base2, base3, base4 } = bases;

  return (
    <div className="base-tracker-wrapper">
      <h2>Base Tracker</h2>
      <div className="bases">
        <div className="bases-row1">
          <span>{base2 ? base2 : "second"}</span>
        </div>
        <div className="bases-row2">
          <span>{base3 ? base3 : "third"}</span>{" "}
          <span>{base1 ? base1 : "first"}</span>
        </div>
        <div className="bases-row3">
          <span>{base4 ? base4 : "home"}</span>
        </div>
      </div>
    </div>
  );
};
