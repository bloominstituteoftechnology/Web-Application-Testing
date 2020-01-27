import React from 'react';
import './Display.scss';

const Display = ({strike, ball}) => {
    
    return (
        <div className="display-container">
            <div className="pitch">
                <h2>Strike</h2>
                <div className="count">{strike}</div>
            </div>
            <div className="pitch">
                <h2>Ball</h2>
                <div className="count">{ball}</div>
            </div>
        </div>
    )
};

export default Display;