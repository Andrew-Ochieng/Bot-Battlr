import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [allBots, setAllBots] = useState([])
  const [botsArmy, setBotsArmy] = useState([])
  const [botsCollection, setBotsCollection] = useState(false)

  useEffect(() => {
    fetchBots()

  }, [botsCollection])

  const fetchBots = () => {
    const api = 'http://localhost:8002/bots'
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        setAllBots(data)
      })
      .catch((err) => console.log(err))
  }


  function addBotToArmy(bot) {
    const newBotArmy = botsArmy.find((b) => b.id === bot.id)
    if (!newBotArmy) setBotsArmy([...botsArmy, bot])

  }

  function releaseBot(bot) {
    const newBotArmy = botsArmy.find((b) => b.id === bot.id)
    if (newBotArmy) {
      setBotsArmy(
        botsArmy.filter((bts) => bts.id !== bot.id)
      )
    }

  }

  function dischargeBot(bot) {
    // const botApi = `http://localhost:8002/bots/${bot.id}`
    fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    setBotsCollection(true)
  }


  return (
    <div>
      <YourBotArmy 
        botsArmy={botsArmy}
        releaseBot={releaseBot} 
      />
      <BotCollection 
        allBots={allBots} 
        dischargeBot={dischargeBot} 
        addBotToArmy={addBotToArmy}
      />
    
    </div>
  )
}

export default BotsPage;
