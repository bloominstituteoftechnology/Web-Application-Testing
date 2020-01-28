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
    
    useEffect(() => {       
        if (strike >= 3 || ball > 3) {
            setStrike(0);
        }  
    }, [setStrike, strike, ball]);

    useEffect(() => {
        if (foul < 3) {
            setStrike(foul);
        } else if (foul > 3) {
            setFoul(0);
        }
    }, [foul, setStrike, setFoul]);

    useEffect(() => {
        if (ball > 3) {
            setBall(0);
        }
    }, [setBall, ball]);

    useEffect(() => {
        if (hit > 0) {
            setStrike(0);
        }
    }, [hit, setStrike]);

    
    useEffect(() => {
        if (hit > 0) {
            setBall(0);
        }
    }, [hit, setBall]);

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