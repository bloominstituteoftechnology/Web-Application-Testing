import React from 'react';
import './App.css';

import ScoreboardBody from './components/ScoreboardBody';

function App() {
  return (
    <div className="App">
      <h1 style={{color: 'white'}}>Scoreboard!</h1>
      <ScoreboardBody />
    </div>
  );
}

export default App;
