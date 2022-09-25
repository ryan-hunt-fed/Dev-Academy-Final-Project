import React from 'react'
import { useLocation } from 'react-router-dom'

import PokeHumanOne from './PokeHumanOne'
import PokeHumanTwo from './PokeHumanTwo'
import PokeHumanThree from './PokeHumanThree'

export default function BattleScreen() {
  const location = useLocation()

  const physicalMoveArr = [
    'Tackle',
    'Pound',
    'Thunder Punch',
    'Low Kick',
    'Fly',
    'Mega Kick',
  ]

  const specialMoveArr = [
    'Flamethrower',
    'Hyper Beam',
    'Psychic',
    'Solar Beam',
    'Moonblast',
    'Ice Beam',
  ]

  const randomMoveOne =
    physicalMoveArr[Math.floor(Math.random() * physicalMoveArr.length)]
  const randomMoveTwo =
    specialMoveArr[Math.floor(Math.random() * specialMoveArr.length)]

  let turn = true

  function handleTurn() {
    turn = !turn
  }

  // AI needs to use moves to deal damage
  // player needs to use moves to deal damage 
  // We need to target hp data and take away damage result 
  // The moves need damage assigned to them - done
  // We need to work out if the move hits or not - 

  return (
    <>
      <div>BattleScreen</div>
      <PokeHumanOne pokehuman={location.state[0]} />
      <PokeHumanTwo pokehuman={location.state[1]} />
      <PokeHumanThree pokehuman={location.state[2]} />
      <div>
        Here is where we will show two pokehumans battling each other. One will
        be player controlled and the other will be run by the computer. You will
        be able to win or lose battles and use random teams. If users are
        implemented you will be able to save teams and battle using your custom
        teams.
      </div>
      <div>These are placeholder images for where the teams might appear</div>
      <button>Generate Team</button>
      <button onClick={handleTurn}>{randomMoveOne}</button>
      <button onClick={handleTurn}>{randomMoveTwo}</button>
    </>
  )
}
