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
		let player = this.state.strike;
		this.setState({
			strike: player + 1
		});
	};

	addBall = () => {
		let player = this.state.ball;
		this.setState({
			ball: player + 1
		});
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
