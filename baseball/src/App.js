import React, { useState } from 'react';
import './App.css';

const App = () => {
	const initStats = {
		strikes: 0,
		balls: 0,
		fouls: 0,
		hits: 0,
		outs: 0,
		runs: 0,
	};
	const [stats, setStats] = useState(initStats);

	const strike = e => {
		e.preventDefault();
		if (stats.strikes < 2) {
			setStats({
				...stats,
				strikes: stats.strikes + 1,
			});
		} else {
			setStats({
				...stats,
				strikes: 0,
				outs: stats.outs + 1,
			});
		}
	};

	const ball = e => {
		e.preventDefault();
		if (stats.balls < 3) {
			setStats({
				...stats,
				balls: stats.balls + 1,
			});
		} else {
			setStats({
				...stats,
				balls: 0,
				runs: stats.runs + 1,
			});
		}
	};

	return (
		<>
			<h1>At-Bat</h1>
			<div>
				<button onClick={strike}>Strike</button>
				<button onClick={ball}>Ball</button>
				<button>Foul</button>
				<button>Hit</button>
			</div>

			<div>
				<h2>Count</h2>
				<p>Strikes: {stats.strikes}</p>
				<p>Balls: {stats.balls}</p>
				<p>Fouls: {stats.fouls}</p>
			</div>
			<div>
				<h2>Total</h2>
				<p>Hits: {stats.hits}</p>
				<p>Outs: {stats.outs}</p>
				<p>Runs: {stats.runs}</p>
			</div>
		</>
	);
};

export default App;
