import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots}) {
  // Your code here
  console.log(bots.Object)


  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        Collection of all bots
        {
          bots.map((bot) => (
            <BotCard bot={bot} key={bot.id} />
          ))
        }
      </div>
    </div>
  );
}

export default BotCollection;
