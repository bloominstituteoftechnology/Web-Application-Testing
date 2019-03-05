import React, { Component } from "react";
import Dashboard from "../Dashboard/Dashboard";

export default class Display extends Component {
state = {
    balls: 0,
    strikes: 0
};

ballsHandler = e => {
    e.preventDefault();
    if (this.state.balls >= 4 || this.state.strikes >= 3) {
    this.setState({
        balls: 0,
        strikes: 0
    });
    } else {
    this.setState({
        ...this.state,
        balls: this.state.balls + 1
    });
    }
};

strikeHandler = () => {
    if (this.state.balls >= 4 || this.state.strikes >= 3) {
    this.setState({
        ...this.state,
        balls: 0,
        strikes: 0
    });
    } else {
    this.setState({
        balls: this.state.balls,
        strikes: this.state.strikes + 1
    });
    }
};

hitHandler = e => {
    e.preventDefault();
    this.setState({
    balls: 0,
    strikes: 0
    });
};

foulHandler = e => {
    e.preventDefault();
    if (this.state.strikes < 2) {
    this.setState({
        ...this.state,
        strikes: this.state.strikes + 1
    });
    }
};

render() {
    return (
    <div>
        <h1>BASEBALL GAME</h1>
        <h2>Balls:</h2> <h2 data-testid="balls">{this.state.balls}</h2>
        <h2>Strikes:</h2> <h2 data-testid="strikes">{this.state.strikes}</h2>
        <Dashboard
        ballsHandler={this.ballsHandler}
        strikeHandler={this.strikeHandler}
        foulHandler={this.foulHandler}
        hitHandler={this.hitHandler}
        />
    </div>
    );
}
}
