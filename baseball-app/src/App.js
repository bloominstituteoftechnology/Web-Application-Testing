import React, {useState} from 'react';
import './App.css';


function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  const [fouls, setFouls] = useState(0);

  const handleStrikes = () => {
    if (strikes < 3) {
      setStrikes(strikes + 1);
    } else {
      setStrikes(0);
      setBalls(0);
      setFouls(0);
    }
  }

  const handleBalls = () => {
    if (balls < 4) {
      setBalls(balls + 1);
    } else {
      setBalls(0)
    }
  }

  const handleFouls = () => {
    if (strikes < 2) {
      setFouls(fouls + 1);
      setStrikes(strikes + 1)
    } else {
      setFouls(fouls + 1)
    }
  }

  const handleHits = () => {
    setStrikes(0);
    setBalls(0);
    setFouls(0);
  }

  return (
    <div className="infoContainer">
      <div className="infoDivs">
        <div className='strikesDiv'>{strikes}</div>
        <button onClick={handleStrikes}>Strike</button>
      </div>
      <div className="infoDivs">
        <div className='ballsDiv'>{balls}</div>
        <button onClick={handleBalls}>Ball</button>
        <button className="hitButton" onClick={handleHits}>Hit</button>
      </div>
      <div className="infoDivs">
        <div className='foulsDiv'>{fouls}</div>
        <button onClick={handleFouls}>Foul</button>
      </div>
    </div>
  );
}

export default App;
