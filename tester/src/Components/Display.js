import React from 'react';

const Display = props => {
    const { balls, strikes, fouls, outs, hits } = props;

    return (
        <div>
        <div>
            <h3 data-testid="balls">Balls</h3>
            <div>
                {balls}
            </div>
        </div>
        <div>
            <h3 data-testid="strikes">Strikes</h3>
            <div>
                {strikes}
            </div>
        </div>
        <div>
            <h3 data-testid="fouls">Fouls</h3>
            <div>
                {fouls}
            </div>
        </div>
        <div>
            <h3 data-testid="hits">Hits</h3>
            <div>
                {hits}
            </div>
        </div>
        <div>
            <h3 data-testid="outs">Outs</h3>
            <div>
                {outs}
            </div>
        </div>
        </div>
    );
};

export default Display;