import React, { Component } from "react";
import { Image } from "react-bootstrap";
import scoreboard from "../assets/scoreboard.jpg";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 0 auto;
`;

export default class Display extends Component {
  render() {
    return (
      <Container>
        <Image src={scoreboard} alt="baseball scoreboard" fluid />
      </Container>
    );
  }
}