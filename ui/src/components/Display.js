import React from 'react';

const Display = (props) => {
    return (
        <div>
            <h3>Display</h3>
            <ul>
                <li>Strikes: {props.atbat.strikes}</li>
                <li>Balls: {props.atbat.balls}</li>
            </ul>
        </div>
        
    )
}

export default Display;