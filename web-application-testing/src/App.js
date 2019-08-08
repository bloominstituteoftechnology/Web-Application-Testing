//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
// import BottomRow from "./BottomRow";

function App() {
  const [balls, ballsCount] = useState(0);
  const [strike, strikeCount] = useState(0);
  const [hit, hitCount] = useState(0);
  const [foul, foulCount] = useState(0);

  // setBallCount = () => {
  //   if(this.state.balls === 3)
  //     this.setState({balls: 0, strike: 0, hit: 0, foul: 0})
  //   else
  //     this.setState({ballCount:+1})
  // }

  // setStrikeCount = () => {
  //   if(this.state.strike === 3)
  //     this.setState({balls: 0, strike: 0, hit: 0, foul: 0})
  //   else
  //     this.setState({strikeCount:+1})
  // }
  
  // setHitCount = () => {
  //   if(this.state.hit === 3)
  //     this.setState({balls: 0, strike: 0, hit: 0, foul: 0})
  //   else
  //     this.setState({hitCount:+1})
  // }

  // setFoulCount = () => {
  //   if(this.state.balls === 3)
  //     this.setState({balls: 0, strike: 0, hit: 0, foul: 0})
  //   else
  //     this.setState({foulCount:+1})
  // }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <div>{balls}</div>
            <h2>Balls</h2>
          </div>
          <div className="home">
            <div>{strike}</div>
            <h2>Strike</h2>
          </div>
          <div className="home">
            <div>{hit}</div>
            <h2>Hit</h2>
          </div>
          <div className="home">
            <div>{foul}</div>
            <h2>Foul</h2>
          </div>
        </div>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <button onClick={() => ballsCount(balls +1)}>Ball</button>
          <button onClick={() => strikeCount(strike +1)}>Strike</button>
          <button onClick={() => hitCount(hit +1)}>Foul</button>
          <button onClick={() => foulCount(foul +1)}>Hit</button>
        </div>
      </section>
    </div>
  );
}

export default App;
