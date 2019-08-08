import React, {useState} from "react";
import "./App.css";

function App() {
  const [balls, ballsCount] = useState(0);
  const [strike, strikeCount] = useState(0);
  const [hit, hitCount] = useState(0);
  const [foul, foulCount] = useState(0);

 const setBallCount = () => {
    if(this.state.ballsCount === 3)
      this.setState({ballsCount: 0, strikeCount: 0, hitCount: 0, foulCount: 0})
    else
      this.setState({ballCount:+1})
  }

  const setStrikeCount = () => {
    if(this.state.strikeCount === 3)
      this.setState({ballsCount: 0, strikeCount: 0, hitCount: 0, foulCount: 0})
    else
      this.setState({strikeCount:+1})
  }
  
  const setHitCount = () => {
    if(this.state.hitCount === 3)
      this.setState({ballsCount: 0, strikeCount: 0, hitCount: 0, foulCount: 0})
    else
      this.setState({hitCount:+1})
  }

  const setFoulCount = () => {
    if(this.state.foulCount === 3)
      this.setState({ballsCount: 0, strikeCount: 0, hitCount: 0, foulCount: 0})
    else
      this.setState({foulCount:+1})
  }

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
          <button onClick={() => setBallCount()}>Ball</button>
          <button onClick={() => setStrikeCount()}>Strike</button>
          <button onClick={() => setHitCount()}>Foul</button>
          <button onClick={() => setFoulCount()}>Hit</button>
        </div>
      </section>
    </div>
  );
}

export default App;
