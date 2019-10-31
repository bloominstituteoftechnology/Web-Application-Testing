import React from 'react';
import './displaypanel.css';

const DisplayPanel = props => {
    return(
        <div className='display'>
            <div>
                <p>Strike: {props.strike}</p>
            </div>
            <div>
                <p>Ball: {props.ball}</p>
            </div>
        </div>
    );
};

export default DisplayPanel;

