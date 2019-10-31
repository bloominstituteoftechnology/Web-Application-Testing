import React from 'react';

class Dashboard extends React.Component {
  constructor (props){
    super()
  }
  render() {
    return (
      <div>
        <button onClick={this.props.strikeCounter}>Strike</button>
        <button onClick={this.props.ballCounter}>Ball</button>
        <button onClick={this.props.foulCounter}>Foul</button>
        <button onClick={this.props.hitCounter}>Hit</button>
      </div>
    )
  }
}
export default Dashboard;