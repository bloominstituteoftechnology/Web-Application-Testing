import React from 'react';
import Display from './Display';

// balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls. X

// - balls and strikes reset to 0 when a`hit` is recorded. X

// - a`foul` increases strikes up to 2. With no strikes, a foul makes it 1 strike.

// With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.


class Dashboard extends React.Component {

    constructor() {
        super();
        this.state = {
            strike: 0,
            ball: 0
        }
    }
    resetStrike = () =>{ return this.state.strike > 2 ? this.setState({strike: 0}) : null}
    foulHandler = () => {
        return (
        this.setState({strike: this.state.strike  === 0  ? + 1 : this.state.strike + 2}),
        this.state.strike === 2 ? this.setState({ strike: 2 }) : null,
        this.state.strike === 1 ? this.setState({strike: 2}) : null
        )
    }
    strikeHandler = () => {return this.setState({ strike: this.state.strike + 1 })}
    
    resetBall = () => {return this.state.ball > 3 ? this.setState({ ball: 0 }) : null}
    BallHandler = () => {return this.setState({ ball: this.state.ball + 1 })}
    hitHandler = () => {
        return this.setState({
            strike: 0,
            ball: 0
        })
    }


    render() {
        return (
            <div>

               
                <Display 
                strike={this.state.strike}
                ball={this.state.ball}
                foulHandler={this.foulHandler}
                resetStrikes={this.resetStrike}
                BallHandler={this.BallHandler}
                resetBall={this.resetBall}
                hitHandler={this.hitHandler}
                strikeHandler={this.strikeHandler}
                resetStrike={this.resetStrike}
                
                />

            </div>
        )
    }

}

export default Dashboard;
