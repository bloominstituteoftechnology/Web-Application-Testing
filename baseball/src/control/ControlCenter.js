import React from 'react';
import Dashboard from './Dashboard.js';
import Display from './Display.js';
//Dashboard for button functions
//function for button to increase ball count
//function for button increase strike count
//function foul to increase strike count
//function for hit to reset ball and strike count

//Display for results to display

class ControlCenter extends React.Component {
    constructor(){
        super();
        this.state = {
            strike: '',
            ball: '',
            hits: ''
        };
    }

    strikeCounter = () => {
        let addStrike = this.state.strike ++;
        if(this.state.strike <= 3){
            this.setState({addStrike});

        }else {
            this.setState({ strike: 1, ball: 0});
        }
    };

    ballCounter = () => {
        let addBall = this.state.ball ++;
        if(this.state.ball <= 4){
            this.setState({addBall});

        }else {
            this.setState({ strike: 0, ball: 1});
        }
    };

    hitCounter = () => {
        let addHit = this.state.hits ++;
        this.setState({addHit});
    }

    render() {
        return (
            <div>
                <Dashboard
                    strikeCounter ={this.strikeCounter}
                    ballCounter = {this.ballCounter}
                    hitCounter = {this.hitCounter}  
                />
                <Display 
                    strike = {this.state.strike}
                    ball = {this.state.ball}
                    hits = {this.state.hits}
                />
            </div>
        )
    }
}

export default ControlCenter;