import React, { Component } from 'react'





export default class Dashboard extends Component {

    render() {

        return (
            <div>
                <button data-testid='ball-btn' onClick={this.props.ballsHandler}>Ball</button>
                <button data-testid='strike-btn' onClick={this.props.strikeHandler}>Strike</button>
                <button data-testid='foul-btn' onClick={this.props.foulHandler}>Foul</button>
                <button data-testid='hit-btn' onClick={this.props.hitHandler}>Hit</button>
            </div>
        )
    }
}