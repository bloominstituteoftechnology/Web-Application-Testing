import React, { useEffect } from "react";
import './Dashboard.scss';

// export const addStrike = (count) => {
//   if (foul > 0 || foul <= 2)
//   return count + 1;
// }

// export const addFoul = (count) => {
//   if (foul < 2 && strike <= 2) {
//     return count + 1;
//   } 
// }

// export const addBall = (count) => {
//   if (foul < 2 && strike < 2) {
//     return count + 1;
//   }
// }

// export const addHit = (count) => {
//   if (foul < 2 && strike < 2) {
//       return count + 1;
//   }
// }

export const addPitch = (count) => {
    return count + 1;
  }
  

const Dashboard = ({strike, setStrike, ball, setBall, foul, setFoul, hit, setHit}) => {
    
    // if (strike > 2) {
    //     setStrike(0) && setFoul(0);
    // }

    // if (foul > 0 || foul < 3) {
    //     setStrike(strike + 1);
    // }

    // if (ball > 3) {
    //     setHit(hit + 1);
    // }

    // if (hit !== 0) {
    //     setStrike(0) && setFoul(0);
    // }

    useEffect(() => {
        if (strike > 2) {
            setStrike(0) && setFoul(0);
        } else if (foul > 0 || foul <= 3) {
            setStrike(foul);
        } else if (foul >= 3) {
            setStrike(2);
        }
    }, [setStrike, setFoul, strike, foul]);

    // useEffect(() => {
    //     if (foul > 0 || foul < 3) {
    //         console.log("rd: Dashboard.js: useEffect: foul", foul)
    //         setStrike(foul);
    //     } else if (foul >= 3) {
    //         setStrike(2);
    //     }
    // }, [foul, setFoul, setStrike, strike]);

    // useEffect(() => {
    //     if (foul > 0 || foul < 3) {
    //         console.log("rd: Dashboard.js: useEffect: foul", foul)
    //         setStrike(addPitch(strike));
    //     }
    // }, [foul, setStrike, strike]);


    return (
        <div className="dashboard-container">
            <button onClick={() => setStrike(addPitch(strike))}>Strike</button>
            <button onClick={() => setFoul(addPitch(foul))}>Foul</button>
            <button onClick={() => setBall(addPitch(ball))}>Ball</button>
            <button onClick={() => setHit(addPitch(hit))}>Hit</button>
        </div>
    )
};

export default Dashboard;