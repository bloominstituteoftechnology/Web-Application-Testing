import React from "react";

function Dashboard(props) {
  console.log(props);
  return (
    <>
      <h2>Balls:{props.balls}</h2>
      <h2>Strikes:{props.strikes}</h2>
      <h2>Fouls:{props.Fouls}</h2>
      <h2>Hits:{props.Hits}</h2>
    </>
  );
}

export default Dashboard;
