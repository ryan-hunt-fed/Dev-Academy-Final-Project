import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { getAllPokehumansThunk } from '../actions/pokehumans'

import PokeHumanOne from './PokeHumanOne'
import PokeHumanTwo from './PokeHumanTwo'
import PokeHumanThree from './PokeHumanThree'
import AiPokehumanOne from './AiPokehumanOne'
import AiPokehumanThree from './AiPokehumanThree'
import AiPokehumanTwo from './AiPokehumanTwo'

export default function BattleScreen() {
  const location = useLocation()
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

  // Potential turn taking system

  // let turn = true

  // function handleTurn() {
  //   turn = !turn
  // }

  // AI needs to use moves to deal damage
  // player needs to use moves to deal damage
  // We need to target hp data and take away damage result
  // The moves need damage assigned to them
  // We need to work out if the move hits or not

  return (
    <>
      <div>BattleScreen</div>
      {location.state && (
        <>
          <PokeHumanOne pokehuman={location.state[0]} />
          <PokeHumanTwo pokehuman={location.state[1]} />
          <PokeHumanThree pokehuman={location.state[2]} />
        </>
      )}
      <div>
        Here is where we will show two pokehumans battling each other. One will
        be player controlled and the other will be run by the computer. You will
        be able to win or lose battles and use random teams. If users are
        implemented you will be able to save teams and battle using your custom
        teams.
      </div>
      <div>
        These are placeholder images for where the teams might appear
        {aiTeam.length > 1 && (
          <>
            <AiPokehumanOne pokehuman={aiTeam[0]} />
            <AiPokehumanTwo pokehuman={aiTeam[1]} />
            <AiPokehumanThree pokehuman={aiTeam[2]} />
          </>
        )}
      </div>
      <button onClick={generateAiTeam}>Generate Team</button>
    </>
  )
}
