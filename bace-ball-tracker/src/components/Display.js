import React, { Component } from "react";
import { Image } from "react-bootstrap";
import scoreboard from "../assets/scoreboard.jpg";

import Dashboard from "./Dashboard";
import { strike, ball, foul, hit } from "../helpers/playBall";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 0 auto;
`;

const NumberContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Number = styled.div`
  font-size: 48px;
  padding: 20px;
  text-align: center;
`;

export default class Display extends Component {
  state = {
    balls: 0,
    strikes: 0,
    hits: 0,
    fouls: 0,
    outs: 0
  };

  callStrike = event => {
    event.preventDefault();
    this.setState(strike(this.state));
    console.log(this.state);
  };

  callBall = event => {
    event.preventDefault();
    this.setState(ball(this.state));
    console.log(this.state);
  };

  callFoul = event => {
    event.preventDefault();
    this.setState(foul(this.state));
    console.log(this.state);
  };

  callHit = event => {
    event.preventDefault();
    this.setState(hit(this.state));
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <Container>
          <Image src={scoreboard} alt="baseball scoreboard" fluid />
        </Container>
        <NumberContainer>
          <Number data-testid="balls">Balls: {this.state.balls}</Number>
          <Number data-testid="strikes">Strikes: {this.state.strikes}</Number>
          <Number data-testid="hits">Hits: {this.state.hits}</Number>
          <Number data-testid="fouls">Fouls: {this.state.fouls}</Number>
          <Number data-testid="outs">Outs: {this.state.outs}</Number>
        </NumberContainer>
        <Dashboard
          callStrike={this.callStrike}
          callBall={this.callBall}
          callFoul={this.callFoul}
          callHit={this.callHit}
        />
      </div>
    );
  }
}