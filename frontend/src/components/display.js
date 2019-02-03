import React from 'react';


class Display extends React.Component {
    state = {
        balls: 0,
        strikes: 0,
        hit: false
    }

    render(){
        return(
            <>
                <h1>Display</h1>
                <h3>Balls</h3>
                <span data-testid="count">{this.props.balls}</span>
                <h3> Strikes </h3>
                <div data-testid="strike">{this.props.strikes}</div>
            </>
        )
    }
}

export default Display;