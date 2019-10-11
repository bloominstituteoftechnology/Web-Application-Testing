import React, { useState } from 'react';


function Display({ stats: { balls, strikes } }) {
    return (
        <>
            <h1>{`Strikes: ${strikes}`}</h1>
            <h1>{`Balls: ${balls}`}</h1>
        </>
    );
}
export default Display;





// export const useBaseball = () => {
//     const [stats, setStats] = useState({
//         strikes: 0,
//         balls: 0,
//     });

//     const foulButton = () => {
//         if (stats.strikes < 2) {
//             setStats({ ...stats, strikes: stats.strikes + 1 });
//         }
//     };

//     const strikeButton = () => {
//         if (stats.strikes === 2) {
//             resetButton();
//         } else {
//             setStats({ ...stats, strikes: stats.strikes + 1 });
//         }
//     };

//     const ballButton = () => {
//         if (stats.balls === 3) {
//             resetButton();
//         } else {
//             setStats({ ...stats, balls: stats.balls + 1 });
//         }
//     };

//     const resetButton = () => setStats({ strikes: 0, balls: 0 });

//     return { stats, strikeButton, ballButton, foulButton, resetButton };
// };