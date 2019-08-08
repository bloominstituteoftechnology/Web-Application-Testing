import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';


  function App(props) {
    const clearCount = {strikes: 0, balls: 0};
    const [count, setCount] = useState({...clearCount, ...props.count});
    const resetCount = () => setCount(clearCount);
    const strike = () => count.strikes >= 2 ? resetCount() : setCount({...count, strikes: count.strikes+1});
    const ball = () => count.balls >= 3 ? resetCount() : setCount({...count, balls: count.balls+1});
    const foul = () => setCount({...count, strikes: Math.min(count.strikes+1, 2)});
    const hit = () => resetCount();
    return (
      <div className="App">
        <Display strikes={count.strikes} balls={count.balls} />
        <Dashboard strike={strike} ball={ball} foul={foul} hit={hit} />
      </div>
    );
  }


export default App;
