import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([])
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
        console.log(data)
        setBots(data)
      })
      .catch((err) => console.log(err))
  }


  function addBotToArmy(bot) {
    const newBotArmy = botsArmy.find((boties) => boties.id === bot.id)
    if (!newBotArmy) setBotsArmy([...botsArmy, bot])

  }

  function releaseBotFromArmy(bot) {
    const newBotArmy = botsArmy.find((boties) => boties.id === bot.id)
    if (newBotArmy) {
      setBotsArmy(
        botsArmy.filter((boties) => boties.id !== bot.id)
      )
    }
  }

  function deleteBot(bot) {
    const botUrl = `http://localhost:8002/bots/${bot.id}`
    fetch(botUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    setBotsCollection(true)
  }


  return (
    <div>
      <YourBotArmy releaseBotFromArmy={releaseBotFromArmy} botsArmy={botsArmy} />
      <BotCollection bots={bots} deleteBot={deleteBot} addBotToArmy={addBotToArmy}/>
    
    </div>
  )
}

export default BotsPage;
