import React from 'react'

export default class Dashboard extends React.Component {
    constructor(props){
        super(props); 
    }

    render(){
        return(
            <div>
              <div>
                <button data-testid='ball-btn' onClick={this.props.ballHandler}>Ball</button>
                <button data-testid='strike-btn' onClick={this.props.strikeHandler}>Strike</button>
                <button data-testid='foul-btn' onClick={this.props.foulHandler}>Foul</button>
                <button data-testid='hit-btn' onClick={this.props.hitHandler}>Hit</button>
              </div>
            </div> 
        )
    }
}