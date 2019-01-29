import React, { Component } from 'react';

import Dashboard from './components/Dashboard';
import Display from './components/Display';

class App extends Component {
   state = {
      strikes: 0,
      balls: 0,
      fouls: 0,
      outs: 0,
   };

   render() {
      return (
         <div className="App">
            <Dashboard />
            {/* <Display /> */}
         </div>
      );
   }
}

export default App;
