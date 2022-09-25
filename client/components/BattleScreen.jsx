import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { getAllPokehumansThunk } from '../actions/pokehumans'
import AiPokehumanOne from './AiPokehumanOne'
import AiPokehumanThree from './AiPokehumanThree'
import AiPokehumanTwo from './AiPokehumanTwo'

export default function BattleScreen() {
  const dispatch = useDispatch()
  const humans = useSelector((store) => store.pokehumans)
  const [aiTeam, setAiTeam] = useState([])

  useEffect(() => {
    dispatch(getAllPokehumansThunk())
  }, [])

  function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random())

    return shuffled.slice(0, num)
  }

  function generateAiTeam(e) {
    e.preventDefault()
    setAiTeam(getMultipleRandom(humans, 3))
  }
  console.log(aiTeam)

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

  const location = useLocation()

  // console.log(location)
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
      <div>
        These are placeholder images for where the teams might appear
        <AiPokehumanOne pokehuman={aiTeam[0]} />
        <AiPokehumanTwo pokehuman={aiTeam[1]} />
        <AiPokehumanThree pokehuman={aiTeam[2]} />
      </div>
      <button onClick={generateAiTeam}>Generate Team</button>
      <button onClick={handleTurn}>{randomMoveOne}</button>
      <button onClick={handleTurn}>{randomMoveTwo}</button>
    </>
  )
}
