import React, {useState} from 'react';
import './App.css';

import Display from "./components/Display";
import Buttons from "./components/Buttons";

function App() {

  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Display balls={balls} strikes={strikes}/>
        <Buttons balls={balls} strikes={strikes} setBalls={setBalls} setStrikes={setStrikes} />
        
      </header>
    </div>
  );
}

export default App;
