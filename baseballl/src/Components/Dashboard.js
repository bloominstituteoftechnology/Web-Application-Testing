// provide buttons that the person in charge can press everytime there is a strike, ball, foul or hit.
// there is no need to specify the type of hit (single, double, etc).
// changes recorded on this component should update the information shown by the Display component.

import React from 'react';
import Display from './Display';
import '../css/Dashboard.css';

class Dashboard extends React.Component{
    state = {
        balls: 0,
        strikes: 0, 
       
      }

      ballHandler = (event) =>{
          event.preventDefault();
          if(this.state.balls === 4){
              this.setState({
                  balls: 0,
                  strikes: 0
             })
             alert('You\'re outta here homie!')
          }else{
              this.setState({
                    balls: this.state.balls + 1
              })
          }
      }
      strikeHandler = (event) =>{
        event.preventDefault();
        if(this.state.strikes === 3){
            this.setState({
                balls: 0,
                strikes: 0
            })
            alert('You\'re outta here homie!')
        }else{
            this.setState({
                strikes: this.state.strikes + 1
            })
        }
    }

    hitMaker = (event) =>{
        event.preventDefault();
        this.setState({
            balls: 0,
            strikes: 0,
        })
        alert('He gotta hold of that one!')
    }
    foulHandler = (event) =>{
        event.preventDefault();
        this.setState({
            strikes: this.state.strikes + 1
        })
        if(this.state.strikes === 3){
            this.setState({
                balls: 0,
                strikes: 0
            })
            alert('Foul Ball!')
        }
    }
    render(){
        return(
            <div className = 'dashboard-container'>
                <Display state = {this.state}/>
                <div className  = 'dash-sub'>
                    <h3 data-testid = 'bawl-header' className = 'ball-button, button' onClick = {this.ballHandler}><i class="fas fa-sad-tear"></i>Bawl <i class="fas fa-sad-tear"></i></h3>
                    <h3 className = 'strike-button, button' onClick = {this.strikeHandler}>Strike</h3>
                
                    <h3 className = 'hit-button, button' onClick = {this.hitMaker}>Hit!</h3>
                    <h3 className = 'foul-button, button' onClick = {this.foulHandler}><i class="fas fa-dove"></i>Fowl<i class="fas fa-dove"></i></h3>
                  
                </div>    
            </div>
        )
    }
}
export default Dashboard;