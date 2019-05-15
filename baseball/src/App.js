import React, { Component } from 'react';
import './App.css';

class App extends Component {
	state = {
		strikes: 0,
		balls: 0,
		hits: 0,
		fouls: 0
	};

	addStrike = () => {
		this.setState({
			strike: this.state.strike + 1
		});
	};

	addBall = () => {
		this.setState({
			ball: this.state.ball + 1
		});
	};
	render() {
		return (
			<div className="App">
				<h1> Baseball</h1>
				<p>Strikes</p>
				<p>Count: {this.state.count}</p>
				<button onClick={this.addStrike}>Strike</button>
				<p>Balls</p>
				<p>Count: {this.state.balls}</p>
				<button>Ball</button>
			</div>
		);
	}
}

export default App;
