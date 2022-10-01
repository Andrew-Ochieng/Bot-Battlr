import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots, handleDelete}) {
  // Your code here
  console.log(bots.Object)


  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        Collection of all bots
        {
          bots.map((bot) => (
            <BotCard bot={bot} key={bot.id} handleDelete={handleDelete} />
          ))
        }
      </div>
    </div>
  );
}

export default BotCollection;
