import React from "react";

function Dashboard(props) {
  console.log(props);
  let balls = props.balls;
  let strikes = props.strikes;
  let setStrikes = props.setStrikes;
  let setBalls = props.setBalls;
  
  function ballsFunct() {
    if (balls === 4) {
      setBalls(0);
      setStrikes(0);
    } else {
      setBalls(balls + 1);
    }
  }
  function strikesFunct() {
    if (strikes === 3) {
      setStrikes(0);
      setBalls(0);
    } else {
      setStrikes(strikes + 1);
    }
  }

  let foul = function() {
    if (strikes >= 2) {
      setStrikes(strikes + 0);
    } else {
      setStrikes(strikes + 1);
    }
  };

  return (
    <div className="container">
      <div className="baseball-Buttons">
        <button className="homeButtons__balls" onClick={ballsFunct}>
          Ball
        </button>
        <button className="homeButtons__strikes" onClick={strikesFunct}>
          Strike
        </button>
        <button className="homeButtons__foul" onClick={foul}>
          Foul
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
