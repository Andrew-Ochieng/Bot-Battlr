import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, deleteBot, addBotToArmy }) {
  // Your code here
  

  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        Collection of all bots
        {
          bots.map((bot) => (
            <BotCard bot={bot} key={bot.id} deleteBot={deleteBot} addBotToArmy={addBotToArmy} />
          ))
        }
      </div>
    </div>
  );
}

export default BotCollection;
