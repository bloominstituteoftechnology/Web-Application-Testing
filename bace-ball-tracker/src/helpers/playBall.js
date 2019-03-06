const strike = item => {
    if (item.strikes < 3) {
      item.strikes++;
    } else {
      item.strikes = 0;
      item.balls = 0;
      item.fouls = 0;
  
       if (item.outs < 3) {
        item.outs++;
      }
    }
    return item;
};
  
const ball = item => {
    if (item.balls < 4) {
      item.balls++;
    } else {
      item.strikes = 0;
      item.balls = 0;
      item.fouls = 0;
    }
  
     return item;
};
  
const foul = item => {
    if (item.fouls < 3) {
      item.fouls++;
      item.strikes++;
    } else{
      item.fouls++  
    }
    return item;
};
  
const out = item => {
    if (item.outs < 3) {
      item.outs++;
      item.strikes = 0;
      item.balls = 0;
      item.fouls = 0;
    } else {
      item.outs = 0;
      item.strikes = 0;
      item.balls = 0;
      item.fouls = 0;
    }
};

const hit = item => {
    item.strikes = 0;
    item.balls = 0;
    item.hits++;
    return item;
}
  
module.exports = { strike, ball, foul, out };