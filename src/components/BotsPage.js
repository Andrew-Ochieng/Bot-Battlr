import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([])

  

  useEffect(() => {
    const api = 'http://localhost:8002/bots'
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setBots(data)
      })


  }, [])


  return (
    <div>
      <YourBotArmy />
      <BotCollection bots={bots}/>
    </div>
  )
}

export default BotsPage;
