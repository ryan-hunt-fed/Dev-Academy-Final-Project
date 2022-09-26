import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useInRouterContext, useLocation } from 'react-router-dom'

import { getAllPokehumansThunk } from '../actions/pokehumans'

export default function BattleScreen() {
  const location = useLocation()
  const dispatch = useDispatch()
  const pokehumans = useSelector((store) => store.pokehumans)
  const [aiTeam, setAiTeam] = useState([])

  const userPokehuman = location.state[0]
  const aiPokehuman = aiTeam[0]
  const [userHP, setUserHP] = useState(userPokehuman?.HP)
  const [aiHP, setAiHP] = useState()

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
    setAiHP(10)
  }

  let turn = true

  function combatLogger(e) {
    var combatLog = document.getElementById('combat-log')
    const linebreak = document.createElement('br')

    console.log(turn)

    if (e.target.id == 'physical-move') {
      document
        .getElementById('combat-log')
        .append('Player used ' + physicalMove + ' ')
    } else if (e.target.id == 'special-move') {
      document
        .getElementById('combat-log')
        .append('Player used ' + specialMove + ' ')
      combatLog.append('Player used ' + physicalMove + ' ')
      combatLog.appendChild(linebreak)

      if (physicalDamage == 1) {
        combatLog.append(physicalMove + ' dealt 1 damage')
        combatLog.appendChild(linebreak)
      } else if (physicalDamage == 2) {
        combatLog.append(physicalMove + ' dealt 2 damage')
        combatLog.appendChild(linebreak)
      } else if (physicalDamage == 3) {
        combatLog.append(physicalMove + ' dealt 3 damage')
        combatLog.appendChild(linebreak)
      } else if (physicalDamage == 4) {
        combatLog.append(physicalMove + ' dealt 4 damage')
        combatLog.appendChild(linebreak)
      }
    }

    if (e.target.id == 'special-move') {
      combatLog.append('Player used ' + specialMove + ' ')
      combatLog.appendChild(linebreak)

      if (specialDamage == 1) {
        combatLog.append(specialMove + ' dealt 1 damage')
        combatLog.appendChild(linebreak)
      } else if (specialDamage == 2) {
        combatLog.append(specialMove + ' dealt 2 damage')
        combatLog.appendChild(linebreak)
      } else if (specialDamage == 3) {
        combatLog.append(specialMove + ' dealt 3 damage')
        combatLog.appendChild(linebreak)
      } else if (specialDamage == 4) {
        combatLog.append(specialMove + ' dealt 4 damage')
        combatLog.appendChild(linebreak)
      }
    }
  }

  function handlePhysicalDamage(e) {
    // e.preventDefault()
    // - damage from ai hp
    let currentAiHP = aiHP - physicalDamage

    setAiHP(currentAiHP)
    aiFaint(currentAiHP)
    turn = !turn
    if (turn == true) {
      playerTurn()
    } else {
      cpuTurn()
    }
    combatLogger(e)
    console.log(e.target.id)
  }

  function handleSpecialDamage(e) {
    // e.preventDefault()
    // - damage from ai hp
    let currentAiHP = aiHP - specialDamage

    setAiHP(currentAiHP)
    aiFaint(currentAiHP)
  }

  function playerTurn() {
    var combatLog = document.getElementById('combat-log')
    const linebreak = document.createElement('br')

    combatLog.append('Players turn, choose an attack')
    combatLog.appendChild(linebreak)
  }

  function cpuTurn() {
    var combatLog = document.getElementById('combat-log')
    const linebreak = document.createElement('br')

    combatLog.append('CPU turn')
    combatLog.appendChild(linebreak)
  }

  // AI needs to use moves to deal damage
  // player needs to use moves to deal damage
  // We need to target hp data and take away damage result
  // The moves need damage assigned to them - done
  // We need to work out if the move hits or not

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

  let physicalDamage = 1

  const physicalDamageCalc = () => {
    if (userPokehuman.attack > 75) {
      return (physicalDamage = 4)
    } else if (userPokehuman.attack > 50) {
      return (physicalDamage = 3)
    } else if (userPokehuman.attack > 25) {
      return (physicalDamage = 2)
    } else {
      return physicalDamage
    }
  }

  let specialDamage = 1

  const specialDamageCalc = () => {
    if (userPokehuman.spAttack > 75) {
      return (specialDamage = 4)
    } else if (userPokehuman.spAttack > 50) {
      return (specialDamage = 3)
    } else if (userPokehuman.spAttack > 25) {
      return (specialDamage = 2)
    } else {
      return specialDamage
    }
  }

  // pokehuman dies
  const aiFaint = (currentAiHP) => {
    //ai health
    if (currentAiHP <= 0) {
      console.log(aiPokehuman, 'has died')
      aiTeam.shift()
      console.log(aiTeam)
      setAiHP(10)
    } else {
      console.log(aiHP)
    }
  }

  const userFaint = () => {
    //ai health
    if (aiHP <= 0) {
      // console.log(pokehuman.name, 'has died')
      aiTeam.shift()
      console.log(aiTeam)
      setAiHP(10)
    }
  }

  return (
    <>
      <div>BattleScreen</div>
      <div>
        <img src={userPokehuman.image} alt="A human pokehuman" />
        <p>{userPokehuman.name}</p>
        <p>{userPokehuman.HP}</p>
        <button onClick={handlePhysicalDamage}>
          {physicalMove}
          {physicalDamageCalc()}
        </button>
        <button onClick={handleSpecialDamage}>
          {specialMove}
          {specialDamageCalc()}
        </button>
      </div>

      {/* <PokeHumanTwo pokehuman={location.state[1]} /> */}
      {/* <PokeHumanThree pokehuman={location.state[2]} /> */}

      <div>
        Here is where we will show two pokehumans battling each other. One will
        be player controlled and the other will be run by the computer. You will
        be able to win or lose battles and use random teams. If users are
        implemented you will be able to save teams and battle using your custom
        teams.
      </div>
      <div>
        These are placeholder images for where the teams might appear
        <img src={aiPokehuman?.image} alt="ai Pokehuman" />
        <p>{aiHP}</p>
        <p>{aiPokehuman?.name}</p>
      </div>
      <button onClick={generateAiTeam}>Generate Team</button>
      <button id="physical-move">{physicalMove}</button>
      <button id="special-move">{specialMove}</button>

      <div id="combat-log"></div>
    </>
  )
}
