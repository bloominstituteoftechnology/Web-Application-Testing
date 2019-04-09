import React from 'react';
import ReactDOM from 'react-dom';

class Dashboard extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
    return (
        <div>
            <button data-testid= "strikeButton" onClick={this.props.strikeClick}>Strike</button>
            <button data-testid= "ballButton" onClick={this.props.ballClick}>Ball</button>
            <button data-testid= "foulButton" onClick={this.props.foulClick}>Foul</button>
            <button data-testid= "hitButton" onClick={this.props.hitClick}>Hit</button>
        </div>
    )
    }
   }

   export default Dashboard;