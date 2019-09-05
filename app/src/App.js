import React, { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";

function App() {
  const [strike, setStrike] = useState(0);
  const [balls, setBalls] = useState(0);

  const StrikeUp = () => {
    if (strike < 2) {
      setStrike(strike + 1);
    } else {
      setStrike(0);
      setBalls(0);
    }
  };

  const BallsUp = () => {
    if (balls < 3) {
      setBalls(balls + 1);
    } else {
      setStrike(0);
      setBalls(0);
    }
  };

  const Hit = () => {
    setStrike(0);
    setBalls(0);
  };

  const Foul = () => {
    if (strike < 2) {
      setStrike(strike + 1);
    }
  };

  return (
    <div className="App">
      <h1>Baseball Counter</h1>
      <Dashboard Balls={BallsUp} StrikeUp={StrikeUp} Hit={Hit} Foul={Foul} />
      <Display strike={strike} balls={balls} />
    </div>
  );
}

export default App;