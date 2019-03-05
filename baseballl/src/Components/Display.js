// display the count of balls and strikes for the at-bat.
// resets both balls and strikes to 0 when a player reaches 3 strikes or 4 balls.
// resets both balls and strikes to 0 when a player connects any type of hit.
// should be updated when the user records activity on the Dashboard component.

import React from 'react';
import '../css/Display.css';

class Display extends React.Component{
   
    render(){
        return(
            <div className = 'display-container'>
                <h1><i class="fas fa-baseball-ball"></i>  Bae's - Ball  <i class="fas fa-baseball-ball"></i></h1>
                    <div className = 'counter-display'>      
                        <div className = 'balls-display-container'>
                            <h3 className = 'counter-header'>Balls:</h3>
                            <p>{this.props.state.balls}</p>
                        </div>  
                        <div className = 'strikes-display-container'>
                            <h3 className = 'counter-header'><i class="fas fa-user-times"></i>Strikes: </h3>
                            <p>{this.props.state.strikes}</p>
                        </div>     
                    </div>  
                <hr></hr>            
            </div>
        )
    }
}
export default Display;