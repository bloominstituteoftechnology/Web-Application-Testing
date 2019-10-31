import React from 'react'


class Dashboard extends React.Component {
    constructor (){
        super ();
        this.state = {
            balls: 0,
            strikes: 0,
            fouls: 0,
            hits: 0,
        };
    }

hits = () => {
    this.setState ({
        balls: 0,
        strikes: 0
    });
};

balls = () => {
    if (this.state.balls < 3){
    this.setState ({
        ...this.state,
        balls: this.state.balls + 1
    });
} else {
    this.setState ({
        balls: 0,
        strikes: 0
    });
    }
};

strikes = () => {
    if(this.state.strikes < 2) {
        this.state({
            ...this.state,
            strikes: this.state.strikes + 1
        });
    } else {
        this.state({
            balls: 0,
            strikes:0
        });
    }
};

fouls = () => {
    if (this.state.strikes < 2) {
        this.state({
            strikes: this.state.strikes + 1
        });
    } else {
        this.state({
            ...this.state,
            strikes: this.state.strikes
        });
    };
};
    

render() {
    return (
        <div>
        <h3>The Count Is</h3>
    
        <p>Balls: {this.state.balls}</p>
        <p>Strikes: {this.state.strikes}</p>
        <p>Fouls: {this.state.fouls}</p>
        <p>Hits: {this.state.hits}</p>
      
            
   
       
    </div>
    );
  }
}
            


export default Dashboard;

