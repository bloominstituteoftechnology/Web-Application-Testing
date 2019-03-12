import React, { Component } from 'react';

class AtBat extends Component {

    state = {
        balls: 0,
        strikes: 0,
        foul: 0,
        hit: 0,
    }
  
    fouls = () => {
        let bradey = this.state.foul
        this.setState({ foul: bradey+1 });
    };

    render() {
        return (
            <div>
                <div>

                    <h2>Player At Bat</h2>
                    <br></br>
                    <h3>Ball</h3>
                    <button onClick={this.fouls}>Ball!</button>
                    <h3>Strike</h3>
                    <h3>Foul</h3>
                    <h3>Hit</h3>
                    <hr></hr>       
                </div>
                <div>
                    <h2>Scoreboard</h2>
                    <h2>_____________</h2>
                    <h3>{` Ball ${this.state.balls} - Strike ${this.state.strikes} - Foul ${this.state.foul} - Hits ${this.state.hit}`}</h3>
                    <br></br>
                    <br></br>
                </div>
            </div>
        );

    }

  



}

export default AtBat;


// Count Rules
// balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
// balls and strikes reset to 0 when a hit is recorded.
// a foul increases strikes up to 2. With no strikes, a foul makes it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.
// Display
// display the count of balls and strikes for the at-bat.
// should be updated when the user records activity on the Dashboard component.
// Dashboard
// provide a button that the person in charge can press every time there is a strike, ball, foul or hit.
// there is NO need to specify the type of hit (single, double, etc).
// changes recorded on this component should update the information shown by the Display component.