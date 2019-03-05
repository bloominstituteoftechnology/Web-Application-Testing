import React, { Component } from 'react'

export class Dashboard extends Component {
    render() {
        return (
            <div>
                <h2>Dashboard</h2>
                <button data-testid='strikeButton' onClick={this.props.strikeHandler}>Strike</button>
                <button data-testid='ballButton' onClick={this.props.ballHandler}>Ball</button>
                <button data-testid='foulButton'>Foul</button>
                <button data-testid='hitButton' onClick={this.props.hitHandler}>Hit</button>
            </div>
        )
    }
}

export default Dashboard;