import React from 'react';

const Display = props => {
    return (
        <div className='display'>
            <div className='balls-count'>{props.ballCount} balls out of 3</div>
            <div className='strikes-count'>{props.strikeCount} strikes out of 3</div>
        </div>
    );
};

export default Display;