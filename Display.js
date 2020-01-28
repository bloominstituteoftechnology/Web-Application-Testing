import React from 'react';

const Display = (props) => {

    return (
        <div className="Display">
            <div className="Balls">
                <h2>Balls</h2>
                <p>{props.balls}</p>
            </div>
            <div className="Strikes">
                <h2>Strikes</h2>
                <p>{props.strikes}</p>
            </div>
        </div>
    );
};

export default Display;