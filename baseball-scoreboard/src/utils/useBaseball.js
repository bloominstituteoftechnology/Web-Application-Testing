import { useState } from 'react';

export const useBaseball = () => {
    const [stats, setStats] = useState({
        strikes: 0,
        balls: 0,
    });

    const foulButton = () => {
        if (stats.strikes < 2) {
            setStats({ ...stats, strikes: stats.strikes + 1 });
        }
    };

    const strikeButton = () => {
        if (stats.strikes === 2) {
            resetButton();
        } else {
            setStats({ ...stats, strikes: stats.strikes + 1 });
        }
    };

    const ballButton = () => {
        if (stats.balls === 3) {
            resetButton();
        } else {
            setStats({ ...stats, balls: stats.balls + 1 });
        }
    };

    const resetButton = () => setStats({ strikes: 0, balls: 0 });

    return { stats, strikeButton, ballButton, foulButton, resetButton };
};