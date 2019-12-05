import React, {useState} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import ScoreDisplay from './Components/Display';
import styled from 'styled-components'

const Board = styled.div`
width: 50%;
height: 25%;
background: #99b19c;
border: 5px solid black;
border-radius: 10px;
margin: auto;
`

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] =  useState(0);

  const ball = () => {
    if (balls === 3) {
      setBalls(0)
      setStrikes(0)
    } else {
      setBalls(balls + 1)
    }
  }

  const strike = () => {
    if (strikes === 2) {
      setStrikes(0)
      setBalls(0)
    } else {
      setStrikes(strikes + 1)
    }
  }

  const foul = () => {
    if (strikes !== 2) {
      setStrikes(strikes + 1)
    } else {
      setStrikes(0)
      setBalls(0)
    }
  }

  const hit = () => {
    setStrikes(0)
    setBalls(0)
  }
  

  return (
    <div className="App">
      <Board>
        <ScoreDisplay strikes={strikes} balls={balls}/>
        <Dashboard ball={ball} strike={strike} hit={hit} foul={foul} />
      </Board>
    </div>
  );
}

export default App;
