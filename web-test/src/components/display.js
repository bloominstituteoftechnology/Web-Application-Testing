import React from 'react';

const Display = (props) => {
    return(
        <div>
            <h2 data-testid="displayStrikes">Strikes: {props.strikes}</h2>
            <h2 data-testid="displayBalls">Balls: {props.balls}</h2>
        </div>
    )
}
export default Display;