import React from 'react';
import './App.css';
import Display from "./Components/Display";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>"Baseball Stadium" Project</h1>
        <Display />
        <Dashboard />
      </header>
    </div>
  );
}

export default App;
