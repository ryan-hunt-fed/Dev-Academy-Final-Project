import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { getAllPokehumansThunk } from '../actions/pokehumans'

export default function BattleScreen() {
  const location = useLocation()
  const dispatch = useDispatch()
  const pokehumans = useSelector((store) => store.pokehumans)
  const [aiTeam, setAiTeam] = useState([])

  const userPokehuman = location.state[0]
  const aiPokehuman = aiTeam[0]
  const [userHP, setUserHP] = useState(userPokehuman.HP)
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

  // Potential turn taking system

  let turn = true

  function combatLogger(e) {
    var combatLog = document.getElementById('combat-log')
    const linebreak = document.createElement('br')

    if (e.target.id == 'physical-move') {
      combatLog.append('Player used ' + physicalMove + ' ')
      combatLog.appendChild(linebreak)
    } else if (e.target.id == 'special-move') {
      combatLog.append('Player used ' + specialMove + ' ')
      combatLog.appendChild(linebreak)
    }

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
    let currentAiHP = aiHP - physicalDamage

    setAiHP(currentAiHP)
    aiFaint(currentAiHP)
    turn = false
    if (turn == true) {
      playerTurn()
    } else {
      cpuTurn()
    }
    combatLogger(e)
    aiAttack()
  }

  function handleSpecialDamage(e) {
    let currentAiHP = aiHP - specialDamage

    setAiHP(currentAiHP)
    aiFaint(currentAiHP)
    turn = !turn
    if (turn == true) {
      playerTurn()
    } else {
      cpuTurn()
    }
    combatLogger(e)
    aiAttack()
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

  //AI
  function aiAttack() {
    let attackChoice = Math.floor(Math.random() * 10)
    if (attackChoice > 5) {
      let currentUserHP = userHP - aiSpecialDamageCalc()
      setUserHP(currentUserHP)
      userFaint(currentUserHP)
    } else {
      let currentUserHP = userHP - aiPhysicalDamageCalc()
      setUserHP(currentUserHP)
      userFaint(currentUserHP)
    }
    cpuTurn()
    combatLogger()
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

  let aiPhysicalDamage = 1

  const aiPhysicalDamageCalc = () => {
    if (userPokehuman.attack > 75) {
      return (aiPhysicalDamage = 4)
    } else if (userPokehuman.attack > 50) {
      return (aiPhysicalDamage = 3)
    } else if (userPokehuman.attack > 25) {
      return (aiPhysicalDamage = 2)
    } else {
      return aiPhysicalDamage
    }
  }

  let aiSpecialDamage = 1

  const aiSpecialDamageCalc = () => {
    if (userPokehuman.spAttack > 75) {
      return (aiSpecialDamage = 4)
    } else if (userPokehuman.spAttack > 50) {
      return (aiSpecialDamage = 3)
    } else if (userPokehuman.spAttack > 25) {
      return (aiSpecialDamage = 2)
    } else {
      return aiSpecialDamage
    }
  }

  // const [playerAlive, setPlayerAlive] = useState(true)
  // const [aiAlive, setAiAlive] = useState(true)

  // Ryan's code for reference for team losing
  // const faint = () => {
  //   if (pokehumans.HP <= 0) {
  //     setPlayerAlive(false)
  //     if (playerAlive = false){
  //       alert('You Lose')
  //     }
  //     }
  //   else if (pokehumans.HP <= 0) {
  //     setAiAlive(false)
  //     if (aiAlive = false) {
  //       alert('You Win')
  //     }
  //   }
  // }

  // pokehuman dies
  const aiFaint = (currentAiHP) => {
    //ai health

    if (currentAiHP <= 0) {
      console.log(aiPokehuman, 'has died')
      aiTeam.shift()
      if (aiTeam.length === 0) {
        alert('You have won the battle')
      }
      setAiHP(10)
    } else {
      console.log(aiHP)
    }
  }

  const userFaint = (currentUserHP) => {
    //ai health
    if (currentUserHP <= 0) {
      // console.log(pokehuman.name, 'has died')
      location.state.shift()
      if (location.state.length === 0) {
        alert('You have lost the battle')
      }
      setUserHP(10)
    }
  }

  return (
    <>
      <div>BattleScreen</div>
      <div>
        <img src={userPokehuman.image} alt="A human pokehuman" />
        <p>{userPokehuman.name}</p>
        <p>{userHP}</p>
        <button id="physical-move" onClick={handlePhysicalDamage}>
          {physicalMove}
          {physicalDamageCalc()}
        </button>
        <button id="special-move" onClick={handleSpecialDamage}>
          {specialMove}
          {specialDamageCalc()}
        </button>
      </div>

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

      <div id="combat-log"></div>
    </>
  )
}
