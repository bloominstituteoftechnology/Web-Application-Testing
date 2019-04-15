export const strike = atBat => {
   if (atBat.strikes < 3) {
      atBat.strikes++;
   } else {
      atBat.strikes = 0;
      atBat.balls = 0;
      atBat.fouls = 0;
      if (atBat.outs < 3) {
         atBat.outs++;
      }
   }
   return atBat;
};

export const ball = atBat => {
   if (atBat.balls < 4) {
      atBat.balls++;
   } else {
      atBat.balls = 0;
      atBat.strikes = 0;
      atBat.fouls = 0;
   }
   return atBat;
};

export const foul = atBat => {
   if (atBat.fouls < 3) {
      atBat.fouls++;
   }
   return atBat;
};

export const out = atBat => {
   if (atBat.outs < 3) {
      atBat.outs++;
      atBat.strikes = 0;
      atBat.balls = 0;
      atBat.fouls = 0;
   } else {
      atBat.outs = 0;
      atBat.strikes = 0;
      atBat.balls = 0;
      atBat.fouls = 0;
   }
   return atBat;
};
