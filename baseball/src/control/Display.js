import React from 'react';

const Display = props => {
    return [
        <div>
            <h4>Strike: {props.strike}</h4>
            <h4>Ball: {props.ball}</h4>
            <h4>Hits: {props.hits}</h4>
        </div>
    ]
}

export default Display;