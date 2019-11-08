import React from 'react';

export const Display = (props) => {

    return(
        <div>
            <p>{props.balls}</p>
            <p>{props.strikes}</p>
        </div>
    )
}