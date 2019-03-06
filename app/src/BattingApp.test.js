import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import BattingApp from './BattingApp';

it('renders without crashing', () => {
    const app = render(<BattingApp />);
    expect(app !== null);
});

it('initializes with zero strikes and zero balls', () => {
    const { getByText } = render(<BattingApp />);

    const strikesText = getByText(/Strikes: 0/i);
    const ballsText = getByText(/Balls: 0/i);
    
    expect(strikesText).toBeInTheDocument();
    expect(ballsText).toBeInTheDocument();
});

it('adds a strike when strike button is clicked', () => {
    const { getByText, getByTestId } = render(<BattingApp />);

    getByTestId('strike-btn').click();

    const strikesText = getByText(/Strikes: 1/i);

    expect(strikesText).toBeInTheDocument();
});

it('resets after 3 strikes', () => {
    const { getByText, getByTestId } = render(<BattingApp />);

    getByTestId('ball-btn').click();
    getByTestId('strike-btn').click();
    getByTestId('strike-btn').click();
    getByTestId('strike-btn').click();

    const strikesText = getByText(/Strikes: 0/i);
    const ballsText = getByText(/Balls: 0/i);
    
    expect(strikesText).toBeInTheDocument();
    expect(ballsText).toBeInTheDocument();
});

it('adds a ball when ball button is clicked', () => {
    const { getByText, getByTestId } = render(<BattingApp />);

    getByTestId('ball-btn').click();

    const ballsText = getByText(/Balls: 1/i);

    expect(ballsText).toBeInTheDocument();
});

it('resets after 4 balls', () => {
    const { getByText, getByTestId } = render(<BattingApp />);

    getByTestId('strike-btn').click();
    getByTestId('ball-btn').click();
    getByTestId('ball-btn').click();
    getByTestId('ball-btn').click();
    getByTestId('ball-btn').click();

    const strikesText = getByText(/Strikes: 0/i);
    const ballsText = getByText(/Balls: 0/i);
    
    expect(strikesText).toBeInTheDocument();
    expect(ballsText).toBeInTheDocument();
});

it('adds a strike when foul button is clicked AND strikes are zero prior', () => {
    const { getByText, getByTestId } = render(<BattingApp />);

    getByTestId('foul-btn').click();

    const strikesText = getByText(/Strikes: 1/i);

    expect(strikesText).toBeInTheDocument();
});

it('resets when foul button is clicked AND strikes are 1 prior', () => {
    const { getByText, getByTestId } = render(<BattingApp />);

    getByTestId('ball-btn').click();
    getByTestId('strike-btn').click();
    getByTestId('foul-btn').click();

    const strikesText = getByText(/Strikes: 0/i);
    const ballsText = getByText(/Balls: 0/i);
    
    expect(strikesText).toBeInTheDocument();
    expect(ballsText).toBeInTheDocument();
});

it('resets when hit button is clicked', () => {
    const { getByText, getByTestId } = render(<BattingApp />);

    getByTestId('ball-btn').click();
    getByTestId('strike-btn').click();
    getByTestId('hit-btn').click();

    const strikesText = getByText(/Strikes: 0/i);
    const ballsText = getByText(/Balls: 0/i);
    
    expect(strikesText).toBeInTheDocument();
    expect(ballsText).toBeInTheDocument();
});

it('stays the same when foul button is clicked AND strikes are 2 prior', () => {
    const { getByText, getByTestId } = render(<BattingApp />);

    getByTestId('strike-btn').click();
    getByTestId('strike-btn').click();
    getByTestId('foul-btn').click();

    const strikesText = getByText(/Strikes: 2/i);
    
    expect(strikesText).toBeInTheDocument();
});
