import React, { useState } from 'react';
import Dashboard from './Dashboard';

//needs to display count of balls vs strikes for the at-bat
//should be updated when the user records activity on the dashboard component

export default function Display(props) {

    const [score, setScores] = useState()

    return (
        <div>
            <div className='scoreboard'>
                <h1>Score</h1>
            </div>
            <div className='scores'>
                <h2>Balls: {props.balls}</h2>
                <h2>Strikes</h2>
                <h2>Fouls</h2>
                <h2>Hits</h2>
            </div>
        </div>
    )
}