const strike = batterUp => {
    if (batterUp.strikes < 3) {
      batterUp.strikes++;
    } else {
      batterUp.strikes = 0;
      batterUp.balls = 0;
      batterUp.fouls = 0;
  
       if (batterUp.outs < 3) {
        batterUp.outs++;
      }
    }
    return batterUp;
};
  
const ball = batterUp => {
    if (batterUp.balls < 4) {
      batterUp.balls++;
    } else {
      batterUp.strikes = 0;
      batterUp.balls = 0;
      batterUp.fouls = 0;
    }
  
     return batterUp;
};
  
const foul = batterUp => {
    if (batterUp.fouls < 3) {
      batterUp.fouls++;
    }
    return batterUp;
};
  
const out = batterUp => {
    if (batterUp.outs < 3) {
      batterUp.outs++;
      batterUp.strikes = 0;
      batterUp.balls = 0;
      batterUp.fouls = 0;
    } else {
      batterUp.outs = 0;
      batterUp.strikes = 0;
      batterUp.balls = 0;
      batterUp.fouls = 0;
    }
};
  
module.exports = { strike, ball, foul, out };