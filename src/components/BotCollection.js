import React from "react";
import BotCard from "./BotCard";

function BotCollection({ displayBots, dischargeBot, addBotToArmy }) {
  // Your code here
  

  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {
          displayBots.map((bot) => (
            <BotCard bot={bot} key={bot.id} dischargeBot={dischargeBot} handleBot={addBotToArmy} />
          ))
        }
      </div>
    </div>
  );
}

export default BotCollection;
