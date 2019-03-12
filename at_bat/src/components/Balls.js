import React from 'react';

class Balls extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0
      };
    }

    onChangeCount(change) {
      this.setState({
        count: this.state.count + change
      });
      /*
      this.setState((previousState) => ({
        count: previousState + change
      }));
      */
    }

    render() {
      return (
        <div>
          <button onClick={ this.onChangeCount.bind(this, 1) }style={{padding: "25px"}}>+</button>
          <h2>{ this.state.count }</h2>
          <h1>Balls</h1>
        </div>
      );
    }
  }

        export default Balls;