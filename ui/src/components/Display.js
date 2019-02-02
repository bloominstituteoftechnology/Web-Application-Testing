import React from 'react';

const Display = (props) => {
    return (
        <div>
            <h3>Display</h3>
            <ul>
                <li data-testid="strikes">Strikes: {props.atbat.strikes}</li>
                <li data-testid="balls">Balls: {props.atbat.balls}</li>
            </ul>
        </div>
        
    )
}

export default Display;