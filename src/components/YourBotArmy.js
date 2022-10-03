import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ botsArmy, releaseBot }) {
  //your bot army code here...
  const enlistedBot = botsArmy.map((bot) => {
    return <BotCard key={bot} bot={bot} handleBot={releaseBot}/>

  })

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {enlistedBot}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
