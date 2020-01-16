import React from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Display />
          <Dashboard />
      </header>
    </div>
  );
}

export default App;
