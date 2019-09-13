import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <Display />
      <Dashboard />
    </div>
  );
}

export default App;
