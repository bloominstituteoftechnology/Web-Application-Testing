import React, { useState } from 'react';
import './App.css';

function App() {
	const [ balls, setBalls ] = useState(0);
	const [ strikes, setStrikes ] = useState(0);

	return (
		<div className="App">
			<Dashboard balls={balls} setBall={setBalls} strikes={strikes} setStrikes={setStrikes} />
			<Display balls={balls} setBall={setBalls} strikes={strikes} setStrikes={setStrikes} />
		</div>
	);
}

export default App;
