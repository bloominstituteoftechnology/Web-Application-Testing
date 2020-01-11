import React from "react";

export const BaseTracker = props => {
  const { base1, base2, base3, base4 } = props.bases;
  return (
    <>
      <div className="base-tracker-wrapper">
        <h2>Base Tracker</h2>
        <div className="bases">
          <div className="bases-row1">
            <span>{base2 ? base2 : "base2"}</span>
          </div>
          <div className="bases-row2">
            <span>{base3 ? base3 : "base3"}</span>{" "}
            <span>{base1 ? base1 : "base1"}</span>
          </div>
          <div className="bases-row3">
            <span>{base4 ? base4 : "base4"}</span>
          </div>
        </div>
      </div>
    </>
  );
};
