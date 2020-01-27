import React from 'react';

const Display = (props) => {


    return(
        <div className = "display-container">
            <div className = "Board">
                <div className = "top-row">
                    <div className = "home">
                        <h2 className = "home-name">Home Hits: </h2>
                        <div className = "home-score">
                            {props.homeHits}
                        </div>
                    </div>
                    <div className = "away">
                        <h2 className = "away-name">Away Hits: </h2>
                        <div className = "away-score">
                            {props.awayHits}
                        </div>
                    </div>
                </div>
                <div className = "counter">
                    <h3 className = "stikes">Strikes: {props.strikes} </h3>
                    <h3 className = "balls">Balls: {props.balls} </h3>
                    <h3 className = "outs">Outs: {props.outs} </h3>
                    <h3 className = "whos-up">At Bat: {props.whosUp} </h3>

                </div>
            </div>
        </div>
    );
};

export default Display;