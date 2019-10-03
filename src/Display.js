import React from 'react';

export default function Display() {
    return (
        <section className="scoreboard">
            <div className="baseball">
                <h1>WE PLAYING BASEBALL NOW</h1>
            </div>
            <div className="topRow">
            <div className="home">
                <h2 className="home__name">Lions</h2>
                <div className="home__score">0</div>
            </div>
            <div className="timer">00:03</div>
            <div className="away">
                <h2 className="away__name">Tigers</h2>
                <div className="away__score">0</div>
            </div>
            </div>
            <div className="bottomRow">
                <div className="strike">
                    <h3 className="strike__title">Strike</h3>
                    <div className="strike__value">3</div>
                </div>
                <div className="ball">
                    <h3 className="ball__title">Ball</h3>
                    <div className="ball__value">7</div>
                </div>
                <div className="foul">
                    <h3 className="foul__title">Foul</h3>
                    <div className="foul__value">21</div>
                </div>
                <div className="hit">
                    <h3 className="hit__title">Hit</h3>
                    <div className="hit__value">4</div>
                </div>
            </div>
        </section>
    );
}