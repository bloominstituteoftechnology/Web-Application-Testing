import React from 'react';

import './App.css';

import { Display } from "./Display";

import { Example } from "./Example";

import { Example2 } from "./Example";

import { Example3 } from "./Example";


function App() {

  return (
    <div className="App">
      <Display />
      
      <Example />
      <Example2 />
    
      <Example3 />
      
    </div>
  );
}

export default App;
