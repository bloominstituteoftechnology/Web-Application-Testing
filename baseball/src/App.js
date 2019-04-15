import React, { Component } from 'react';

import Display from './components/Display';
import Dashboard from './components/Dashboard';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balls: 0,
      strikes: 0,
    };
  }

  ballIncrease = e => {
    this.setState(prevState => {
      return {
        balls: prevState.balls + 1,
      }
    })
  };
}
export default App;
