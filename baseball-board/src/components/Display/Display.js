import React from 'react';
import './Display.scss';

const Display = () => {
    
    return (
        <div className="display-container">
            <div className="strike">
                <h2>Strike</h2>
            </div>
            <h1>At bat</h1>
            <div className="ball">
                <h2>Ball</h2>
            </div>
        </div>
    )
};

export default Display;