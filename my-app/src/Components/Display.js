import React from "react";
// import Dashboard from "./Components/Dashboard";

function Display(props) {
  

  return (
    <div className="Display">
      
      <div className="balls-display">{props.balls}</div>
      <div className="strikes-display">{props.strikes}</div>
    </div>
  );
}
export default Display;
