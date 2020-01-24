import React from 'react'
import styled from 'styled-components'

export default function Display(props) {
    const Container = styled.div`
    text-align:center;
    `
    return (
        <Container>
            <h2>Strikes : {props.strikes}</h2>
            <h2>Balls : {props.balls}</h2>
            <h2>Outs : {props.outs}</h2>
            <h2>Innings : {props.innings}</h2>
        </Container>
    )
}