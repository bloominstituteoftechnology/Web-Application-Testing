import React from 'react';

const Diandra = props => {
    const { balls, strikes } = props;

    return (
        <>
             <h3> Diandra Count </h3>
                <div>
                    {balls} balls and {strikes} strikes
                </div>
           
        </>
    )
}

export default Diandra;