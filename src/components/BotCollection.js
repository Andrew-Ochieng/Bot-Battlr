import React from "react";

function BotCollection({bots}) {
  // Your code here
  console.log(bots.Object)


  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        Collection of all bots
        {
          bots.Object()
        }
      </div>
    </div>
  );
}

export default BotCollection;
