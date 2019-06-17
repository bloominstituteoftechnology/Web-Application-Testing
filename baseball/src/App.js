import React, { Component } from 'react';
import './App.css';

class App extends Component {
	state = {
		strike: 0,
		ball: 0,
		hit: 0,
		foul: 0
	};

	fouls = () => {
		let player = this.state.foul;
		this.setState({ foul: player + 1 });
	};

	hits = () => {
		let player = this.state.hit;
		this.setState({
			hit: player + 1
		});
	};

	addStrike = () => {
		let strikes = this.state.strike;
		if (strikes < 2) {
			this.setState({ strike: this.state.strike + 1 });
		} else {
			this.setState({ strikes: 0 });
		}
	};

	addBall = () => {
		let balls = this.state.ball;
		if (balls < 3) {
			this.setState({ balls: this.state.ball + 1 });
		} else {
			this.setState({ balls: 0 });
		}
	};

	reset = () => {
		this.setState({
			strike: 0,
			ball: 0,
			hit: 0,
			foul: 0
		});
	};
	render() {
		return (
			<div className="App">
				<h1> Baseball</h1>
				<p>Strikes</p>
				<p>Count: {this.state.strike}</p>
				<button onClick={this.addStrike}>Strike</button>
				<p>Balls</p>
				<p>Count: {this.state.ball}</p>
				<button onClick={this.addBall}>Ball</button>
				<p>Hits</p>
				<p>{this.state.hit}</p>
				<button onClick={this.hits}>Hits</button>
				<p>Fouls</p>
				<p>{this.state.foul}</p>
				<button onClick={this.fouls}>Foul</button>
			</div>
		);
	}
}

export default App;
