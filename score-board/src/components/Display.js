import React, { useState } from 'react';
import Dashboard from './Dashboard';

//needs to display count of balls vs strikes for the at-bat
//should be updated when the user records activity on the dashboard component

export default function Display(props) {
    // const [atBat, setAtBat] = Dashboard()

    return (
        <div>
            <div className='scoreboard'>
                <h1>Score</h1>
            </div>
            <div className='scores'>
                <h2>Balls:</h2>
                <h2>Strikes:</h2>
            </div>
        </div>
    )
}