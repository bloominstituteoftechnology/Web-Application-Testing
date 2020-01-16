import React from 'react';


const Display = (props) =>{



  return(
    <div className="display-container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Home Hits:</h2>s

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{props.homeHits}</div>
          </div>

          <div className="away">
            <h2 className="away__name">Away Hits:</h2>
            <div className="away__score">{props.awayHits}</div>
          </div>
        </div>
        <div className="counter">
          <h3 className="strikes">Strikes: {props.strikes}</h3>
          <h3 className="balls">Balls: {props.balls}</h3>
          <h3 className="outs">Outs: {props.outs}</h3>
          <h3 className="whos-up">At Bat: {props.whosUp}</h3>
        </div>
      </section>

    </div>


  );



};

export default Display;