import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ botsArmy, releaseBotFromArmy }) {
  //your bot army code here...
  
  // const botArmy = botsArmy.map((bot) => {
  //   return <BotCard key={bot} bot={bot} releaseBotFromArmy={releaseBotFromArmy}/>
  // })

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          Your Bot Army
          {
            botsArmy.map((bot) => (
              <BotCard key={bot} bot={bot} releaseBotFromArmy={releaseBotFromArmy}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
