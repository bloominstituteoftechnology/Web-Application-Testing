import React from 'react';

const Display = props => {
    const { balls, strikes } = props;

    return (
        <>
        <h3>Counts</h3>
        <div>
            {balls} {strikes}
        </div>
        </>
    );
};

export default Display;