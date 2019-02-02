import React from 'react';
import ReactDOM from 'react-dom';

class Dashboard extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
    return (
        <div>
            <button onClick={this.props.strikeClick}>Strike</button>
            <button onClick={this.props.ballClick}>Ball</button>
            <button onClick={this.props.strikeClick}>Foul</button>
            <button onClick={this.props.hitClick}>Hit</button>
        </div>
    )
    }
   }

   export default Dashboard;