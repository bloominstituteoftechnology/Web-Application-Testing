import React, { Component } from 'react';

import Dashboard from './components/Dashboard';
import Display from './components/Display';

import { strike, ball, foul, out } from './helpers/functions';

class App extends Component {
   state = {
      strikes: 0,
      balls: 0,
      fouls: 0,
      outs: 0,
   };

   callStrike = (e, state) => {
      e.preventDefault();
      strike(state);
   };

   callBall = (e, state) => {
      e.preventDefault();
      ball(state);
   };

   callFoul = (e, state) => {
      e.preventDefault();
      foul(state);
   };

   callOut = (e, state) => {
      e.preventDefault();
      out(state);
   };

   render() {
      return (
         <div className="App">
            <Dashboard
               callStrike={this.callStrike}
               callBall={this.callBall}
               callFoul={this.callFoul}
               callOut={this.callOut}
            />
            <Display
               strikes={this.state.strikes}
               balls={this.state.balls}
               fouls={this.state.fouls}
               outs={this.state.outs}
            />
         </div>
      );
   }
}

export default App;
