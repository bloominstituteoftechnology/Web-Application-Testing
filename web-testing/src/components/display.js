import React from 'react';
import { addBallCount, addStrikes } from './dashboard.js';

function Display(){
    return(
        <div>
            <h1>Current Player At Bat</h1>
            <span/>
            <h3>Ball</h3>
            <span/>
            <h4>{addBallCount}</h4>
            <span/>
            <span/>
            <h3>Strikes</h3>
            <span/>
            <h4>{addStrikes}</h4>
        </div>
    );
}

export default Display;