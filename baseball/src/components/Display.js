import React from 'react';

const Display = (props) => {
    return(
        <>
            <p>balls: <span data-testid='balls'>{`${props.getBalls()}`}</span></p>
            <p>strikes: <span data-testid='strikes'>{`${props.getStrikes()}`}</span></p>
        </>
    )
    
}

export default Display