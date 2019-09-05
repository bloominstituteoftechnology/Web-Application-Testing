import React from 'react';
import './App.css';


import Display from "./components/Display";
import Dashboard from "./components/Dashboard";


function App() {

  const [balls, setBalls ] = useState(0);
  const [strikes, setStrikes] = useState(0)


  }
  return (
    <div className="App">
      <h1>I Hate Baseball</h1>
      <Display />
      <Dashboard />
    </div>
  );
}

export default App;