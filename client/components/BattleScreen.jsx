import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { getAllPokehumansThunk } from '../actions/pokehumans'

import PokeHumanOne from './PokeHumanOne'
// import PokeHumanTwo from './PokeHumanTwo'
// import PokeHumanThree from './PokeHumanThree'
import AiPokehumanOne from './AiPokehumanOne'
// import AiPokehumanThree from './AiPokehumanThree'
// import AiPokehumanTwo from './AiPokehumanTwo'

export default function BattleScreen() {
  const location = useLocation()
  const dispatch = useDispatch()
  const pokehumans = useSelector((store) => store.pokehumans)
  const [aiTeam, setAiTeam] = useState([])


  //AI TEAM
  useEffect(() => {
    dispatch(getAllPokehumansThunk())
  }, [])

  function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, num)
  }

  function generateAiTeam(e) {
    e.preventDefault()
    setAiTeam(getMultipleRandom(pokehumans, 2))
  }

  // Potential turn taking system

  let turn = true

  function combatLogger(e) {
    if (e.target.id == 'physical-move') {
      document
        .getElementById('combat-log')
        .append('Player used ' + physicalMove + ' ')
    } else if (e.target.id == 'special-move') {
      document
        .getElementById('combat-log')
        .append('Player used ' + specialMove + ' ')
    }
    console.log(turn)
  }

  function handleTurn(e) {
    // e.preventDefault()
    turn = !turn
    
    combatLogger(e)
    // console.log(e.target.id)
    // console.log(turn)
    aiTurn()

  }

  //TODO
  // AI needs to use moves to deal damage - half
  // player needs to use moves to deal damage - done
  // We need to target hp data and take away damage result - 
  // The moves need damage assigned to them - done
  // We need to work out if the move hits or not

  //AI
  function aiTurn(){
    
      if (location.state[0].attack <= 100) {
        console.log(specialMove)
      // physicalDamageCalc()
      // specialMove
      // specialDamageCalc()
      // turn = true
      // handleTurn()
    }
    else if (location.state[0].spAttack <= 50){
      console.log(physicalMove)
      // turn = true
      // handleTurn()
      
    }
}
  
  //MOVES
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

  const physicalMove =
    physicalMoveArr[Math.floor(Math.random() * physicalMoveArr.length)]
  const specialMove =
    specialMoveArr[Math.floor(Math.random() * specialMoveArr.length)]


  //DAMAGE CALCULATION
  let physicalDamage = 1

  const physicalDamageCalc = () => {
    if (location.state[0].attack > 75) {
      return (physicalDamage = 4)
    } else if (location.state[0].attack > 50) {
      return (physicalDamage = 3)
    } else if (location.state[0].attack > 25) {
      return (physicalDamage = 2)
    } else {
      return physicalDamage
    }
  }

  let specialDamage = 1

  const specialDamageCalc = () => {
    if (location.state[0].spAttack > 75) {
      return (specialDamage = 4)
    } else if (location.state[0].spAttack > 50) {
      return (specialDamage = 3)
    } else if (location.state[0].spAttack > 25) {
      return (specialDamage = 2)
    } else {
      return specialDamage
    }
  }


  const [playerAlive, setPlayerAlive] = useState(true)
  const [aiAlive, setAiAlive] = useState(true)

  // NO HP
  const faint = () => {
    if (pokehumans.HP <= 0) {
      setPlayerAlive(false)
      if (playerAlive = false){
        alert('You Lose')
      }
      }
    else if (pokehumans.HP <= 0) {
      setAiAlive(false)
      if (aiAlive = false) {
        alert('You Win')
      }
    }
  }

  //SWITCH ACTIVE POKEHUMAN
  // function switchPokehuman() {
  //   if ((active = false)) {
  //     return setActive(true)
  //   } else if ((active = true)) {
  //     return setActive(false)
  //   }
  // }

  return (
    <>
      <div>BattleScreen</div>
      {location.state && (
        <>
          <PokeHumanOne pokehuman={location.state[0]} />
          <button id="physical-move"  onClick={handleTurn}>
            {physicalMove}: 
            {physicalDamageCalc()}
          </button>
          <button id="special-move" onClick={handleTurn}>
            {specialMove}: 
            {specialDamageCalc()}
          </button>

          {/* <PokeHumanTwo pokehuman={location.state[1]} /> */}
          {/* <PokeHumanThree pokehuman={location.state[2]} /> */}
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
            {/* <AiPokehumanTwo pokehuman={aiTeam[1]} /> */}
            {/* <AiPokehumanThree pokehuman={aiTeam[2]} /> */}
          </>
        )}
      </div>
      <button onClick={generateAiTeam}>Generate Team</button>
      <button id="physical-move" onClick={handleTurn}>
        {physicalMove}
      </button>
      <button id="special-move" onClick={handleTurn}>
        {specialMove}
      </button>

      <div>
        <p id="combat-log">Combat Log: </p>
      </div>
    </>
  )
}
