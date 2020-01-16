import React from 'react';

import ScoreWindow from './ScoreWindow';
import Button from './Button';

const divStyle = {
  width: '1000px',
  height: '600px',
  display: 'flex',
  flexFlow: 'row',
  background: '#018786',
  borderRadius: '5px',
  margin: '50px',
  justifyContent: 'space-evenly',
  padding: '50px'
}

const buttonContainer = {
  width: '1000px',
  height: '200px',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-evenly',
  margin: '50px',
  padding: '50px',
}

class ScoreboardBody extends React.Component {
  constructor() {
    super();
    this.state = {
      teams: ['Jays', 'Sparrows'],
      JaysBalls: 0,
      SparrowsBalls: 0,
      JaysScore: 0,
      SparrowsScore: 0,
      JaysStrikes: 0,
      SparrowsStrikes: 0,
      JaysOuts: 0,
      SparrowsOuts: 0
    };

  }
  
  handleUpdateJaysBalls = e => {
    if(this.state.JaysBalls < 3) {
      this.setState({
        JaysBalls: this.state.JaysBalls + 1
      });
    } else {
      this.setState({
        JaysBalls: 0,
        JaysScore: this.state.JaysScore + 1
      })
    }
  }

  handleUpdateSparrowsBalls = e => {
    if(this.state.SparrowsBalls < 3) {
      this.setState({
        SparrowsBalls: this.state.SparrowsBalls + 1
      });
    } else {
      this.setState({
        SparrowsBalls: 0,
        SparrowsScore: this.state.SparrowsScore + 1
      })
    }
  }

  handleUpdateJaysScore = e => {
    this.setState({
      JaysScore: this.state.JaysScore + 1
    });
  }

  handleUpdateSparrowsScore = e => {
    this.setState({
      SparrowsScore: this.state.SparrowsScore + 1
    });
  }

  handleUpdateJaysStrikes = e => {
    if(this.state.JaysStrikes < 2) {
      this.setState({
        JaysStrikes: this.state.JaysStrikes + 1
      });
    } else if (this.state.JaysOuts < 2) {
      this.setState({
        JaysStrikes: 0,
        JaysOuts: this.state.SparrowsOuts + 1
      })
    } else {
      this.setState({
        JaysStrikes: 0,
        JaysOuts: 0
      })
    }
  }

  handleUpdateSparrowsStrikes = e => {
    if(this.state.SparrowsStrikes < 2) {
      this.setState({
        SparrowsStrikes: this.state.SparrowsStrikes + 1
      });
    } else if (this.state.SparrowsOuts < 2) {
      this.setState({
        SparrowsStrikes: 0,
        SparrowsOuts: this.state.SparrowsOuts + 1
      })
    } else {
      this.setState({
        SparrowsStrikes: 0,
        SparrowsOuts: 0
      })
    }
  }

  handleUpdateJaysFouls = e => {
    if(this.state.JaysStrikes < 2)
      this.setState({
        JaysStrikes: this.state.JaysStrikes + 1
      });
  }

  handleUpdateSparrowsFouls = e => {
    if(this.state.SparrowsStrikes < 2)
      this.setState({
        SparrowsStrikes: this.state.SparrowsStrikes + 1
      });
  }

  handleUpdateJaysOuts = e => {
    if(this.state.JaysOuts < 3) {
      this.setState({
        JaysOuts: this.state.JaysOuts + 1
      });
    } else {
      this.setState({
        JaysOuts: 0
      })
    }
  }

  handleUpdateSparrowsOuts = e => {
    if(this.state.SparrowsOuts < 2) {
      this.setState({
        SparrowsOuts: this.state.SparrowsOuts + 1
      });
    } else {
      this.setState({
        SparrowsOuts: 0
      })
    }
  }

  render() {
    console.log(this.state)
    return(
      <>
        <div style={divStyle} data-testid="Scoreboards">
          <ScoreWindow 
            name={this.state.teams[0]} 
            score={this.state.JaysScore} 
            balls={this.state.JaysBalls} 
            strikes={this.state.JaysStrikes}
            outs={this.state.JaysOuts}
          />
          <ScoreWindow 
            name={this.state.teams[1]} 
            score={this.state.SparrowsScore} 
            balls={this.state.SparrowsBalls} 
            strikes={this.state.SparrowsStrikes}
            outs={this.state.SparrowsOuts}
          />
        </div>
        <div style={buttonContainer}>
          <Button function={this.handleUpdateJaysScore} name={'Jays Score'}/>
          <Button function={this.handleUpdateSparrowsScore} name={'Sparrows Score'}/>
          <Button function={this.handleUpdateJaysBalls} name={'Jays Balls'}/>
          <Button function={this.handleUpdateSparrowsBalls} name={'Sparrows Balls'}/>
          <Button function={this.handleUpdateJaysStrikes} name={'Jays Strikes'}/>
          <Button function={this.handleUpdateSparrowsStrikes} name={'Sparrows Strikes'}/>
          <Button function={this.handleUpdateJaysFouls} name={'Jays Foul'}/>
          <Button function={this.handleUpdateSparrowsFouls} name={'Sparrows Foul'}/>
          <Button function={this.handleUpdateJaysOuts} name={'Jays Out'}/>
          <Button function={this.handleUpdateSparrowsOuts} name={'Sparrows Out'}/>
        </div>
      </>
    )
  }
}

export default ScoreboardBody;