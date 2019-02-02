import React, { Component } from "react";
import { Button } from "react-bootstrap";

import Display from "./Display";
import { strike, ball, foul, hit } from "../helpers/playBall";

import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 25px;
`;

export default class Dashboard extends Component {
  state = {
    balls: 0,
    strikes: 0,
    hits: 0,
    fouls: 0,
    outs: 0
  };

  callStrike = event => {
    event.preventDefault();
    strike(this.state);
    console.log(this.state);
  };

  callBall = event => {
    event.preventDefault();
    ball(this.state);
    console.log(this.state);
  };

  callFoul = event => {
    event.preventDefault();
    foul(this.state);
    console.log(this.state);
  };

  callHit = event => {
    event.preventDefault();
    hit(this.state);
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Display
          balls={this.state.balls}
          strikes={this.state.strikes}
          hits={this.state.hits}
          fouls={this.state.fouls}
          outs={this.state.outs}
        />
        <ButtonContainer>
          <Button
            variant="danger"
            size="lg"
            style={{ marginBottom: "10px" }}
            onClick={this.callStrike}
          >
            Strike!
          </Button>
          <Button
            variant="secondary"
            size="lg"
            style={{ marginBottom: "10px" }}
            onClick={this.callBall}
          >
            Ball!
          </Button>
          <Button
            variant="warning"
            size="lg"
            style={{ marginBottom: "10px" }}
            onClick={this.callFoul}
          >
            Foul!
          </Button>
          <Button
            variant="success"
            size="lg"
            style={{ marginBottom: "10px" }}
            onClick={this.callHit}
          >
            Hit!
          </Button>
        </ButtonContainer>
      </div>
    );
  }
}
