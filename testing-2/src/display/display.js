import React from 'react';

const Display = props => {
    return (
        <div className='display'>
            <div title='balls-count' className='balls-count'>{props.ballCount} balls out of 4</div>
            <div title='strikes-count' className='strikes-count'>{props.strikeCount} strikes out of 3</div>
        </div>
    );
};

export default Display;