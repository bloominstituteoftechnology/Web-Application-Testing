import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/dashboard';
import Display from './components/display';
function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  return (
    <div className="App">
      <h1>At bat baseball tracker</h1>
      <Dashboard strikes={strikes} setStrikes={setStrikes} balls={balls} setBalls={setBalls} />
      <Display strikes={strikes} balls={balls} setStrikes={setStrikes}setBalls={setBalls}  />
    </div>
  );
}

export default App;
