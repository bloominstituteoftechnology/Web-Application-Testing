import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { addStrike } from './utils/addStrike'
import { addBall } from './utils/addBall'
import { addFoul } from './utils/foul'


import Display from './components/Display';
import Dashboard from './components/Dashboard';

import './App.css';

const Container = styled.div`
  background-color: #D3B083;
  height: 100vh
`

const Wrapper = styled.div`
  width: 800px;
  height: 40vh;
  background-color: #486030;
  color: white;
  font-family: 'Montserrat', sans-serif;
  margin: 0% auto;
`

function App() {
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [foul, setFoul] = useState(0);

  const baller = () => {
    const count =  addBall(ball)
    if(count === 5){
      setStrike(0)
      setBall(0)
      setFoul(0)
    } else {
     setBall(count);
    }
  }

  const striker = () =>{
    const count = addStrike(strike)
    if(count > 4){
      setStrike(0)
      setBall(0)
      setFoul(0)
    }
    else {
     setStrike(count);
    }
  }

  const fouler = () => {
    const count = addFoul(foul)
    if(strike < 2){
      setStrike(strike + 1)
    }
    setFoul(count);
  }

  const hit = () => {
    setStrike(0)
    setBall(0)
    setFoul(0)
  }

  return (
    <Container>
    <Wrapper className="App">
      <div className="header">
      <Display strike={strike} ball={ball} foul={foul}/>
      </div>
      
      <div className="dashboard">
        <Dashboard addStrike={striker} addBall={baller} hit={hit} foul={fouler}/>
      </div>
    </Wrapper>
    </Container>
  );
}

export default App