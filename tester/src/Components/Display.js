import React from 'react';

const Display = props => {
    const { balls, strikes } = props;

    return (
        <div>
        <div>
            <h3 data-testid="headerH3">Balls</h3>
            <div>
                {balls}
            </div>
        </div>
        <div>
            <h3 data-testid="headerH32">Strikes</h3>
            <div>
                {strikes}
            </div>
        </div>
        </div>
    );
};

export default Display;