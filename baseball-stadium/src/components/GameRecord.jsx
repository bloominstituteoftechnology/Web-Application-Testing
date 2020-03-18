import React from "react";

export const Record = ({ teams }) => {
  const homeTeamRecord = teams.home.record;
  const visitorTeamRecord = teams.visitor.record;
  const homeKeys = Object.keys(homeTeamRecord);
  const visitorKeys = Object.keys(visitorTeamRecord);
  //todo DRY THIS CODE
  // const createScore = teamRecord => {
  //   console.log(teamRecord);
  //   const keys = Object.keys(teamRecord);
  //   keys.map((key, i) => {
  //     return (
  //       <div>
  //         <p>{key}:</p>
  //         <p>key</p>
  //         {/* {teamRecord[key].inning.map((e, i) => (
  //           <p>
  //             {i + 1}: {e}
  //           </p>
  //         ))} */}
  //       </div>
  //     );
  //   });
  // };

  return (
    <div className="record-wrapper">
      <div className="record-home record-column">
        <h3>Home Team</h3>
        {/* {createScore(homeTeamRecord)} */}
        <div className="home-stats stats">
          {homeKeys.map((key, i) => {
            return (
              <p className="stat" key={i}>
                {key}: Total={homeTeamRecord[key].total}
                {homeTeamRecord[key].inning.map((e, i) => (
                  <span key={i}>
                    {i + 1}: {e}
                  </span>
                ))}
              </p>
            );
          })}
        </div>
      </div>

      <div className="record-away record-column">
        <h3>Visitor Team</h3>
        {/* {createScore(visitorTeamRecord)} */}
        <div className="away-stats stats">
          {visitorKeys.map((key, i) => {
            return (
              <p className="stat" key={i}>
                {key}: Total={visitorTeamRecord[key].total}
                {visitorTeamRecord[key].inning.map((e, i) => (
                  <span key={i}>
                    {i + 1}: {e}
                  </span>
                ))}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
