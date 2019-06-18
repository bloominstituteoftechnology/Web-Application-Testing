import React from 'react';

const Display = (props) => {
    return(
        <>
            <div>balls: {`${props.getBalls()}`}</div>
            <div>strikes: {`${props.getStrikes()}`}</div>
        </>
    )
    
}

export default Display