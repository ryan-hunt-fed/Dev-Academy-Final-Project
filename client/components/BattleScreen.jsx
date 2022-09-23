import React from 'react'
import { useLocation } from 'react-router-dom'

export default function BattleScreen() {
  const location = useLocation()

  console.log(location)
  return (
    <>
      <div>BattleScreen</div>
      {location.state?.map((pokes) => {
        return <img src={pokes.image} alt={pokes.name} key={pokes.id} />
      })}
      <div>
        Here is where we will show two pokehumans battling each other. One will
        be player controlled and the other will be run by the computer. You will
        be able to win or lose battles and use random teams. If users are
        implemented you will be able to save teams and battle using your custom
        teams.
      </div>
      <div>These are placeholder images for where the teams might appear</div>
      <button>Generate Team</button>
      <button>Physical Attack</button>
      <button>Special Attack</button>
    </>
  )
}
