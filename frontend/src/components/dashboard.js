import React from 'react';
import Display from './display';

class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            balls: 0,
            strikes: 0,
            hit: false
        }

        this.increment = this.increment.bind(this)
        this.incrementBall = this.incrementBall.bind(this)
    }
    
    increment(){
        this.setState({strikes: this.state.strikes + 1 });
        if (this.state.strikes === 3){
            this.setState({strikes: 0 });
        }
    }

    incrementBall(){
        this.setState({balls: this.state.balls + 1 });
        if (this.state.balls === 4){
            this.setState({balls: 0 });
        }
    }

    render(){
        console.log(this.state.strikes)
        return(
            <>
                <button onClick={this.increment}>Strike</button>
                <button onClick={this.incrementBall}>Ball</button>
                <button>Foul</button>
                <button>Hit</button>
                <h1> Current Strike: {this.state.strikes}</h1>
                <h1> Current Balls: {this.state.balls}</h1>

                <h1>DISPLAY</h1>
                <Display strikes={this.state.strikes} balls={this.state.balls}/>
            </>
        )
    }

   
}

export default Dashboard;