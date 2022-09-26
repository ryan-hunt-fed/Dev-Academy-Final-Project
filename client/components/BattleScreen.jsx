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

  useEffect(() => {
    setAiTeam(getMultipleRandom(pokehumans, 3))
    setAiHP(10)
  }, [])

  // Potential turn taking system

  let turn = true

  // COMBAT LOG
  const combatLog = document.getElementById('combat-log')
  const linebreak = document.createElement('br')

  function combatLogger(e) {
    if (e.target.id == 'physical-move') {
      combatLog.append('Player used ' + physicalMove + ' ')
      combatLog.appendChild(linebreak)
    } else if (e.target.id == 'special-move') {
      combatLog.append('Player used ' + specialMove + ' ')
      combatLog.appendChild(linebreak)
    }

    if (physicalDamage == 1) {
      combatLog.append(physicalMove + ' dealt 1 damage ')
      combatLog.appendChild(linebreak)
    } else if (physicalDamage == 2) {
      combatLog.append(physicalMove + ' dealt 2 damage ')
      combatLog.appendChild(linebreak)
    } else if (physicalDamage == 3) {
      combatLog.append(physicalMove + ' dealt 3 damage ')
      combatLog.appendChild(linebreak)
    } else if (physicalDamage == 4) {
      combatLog.append(physicalMove + ' dealt 4 damage ')
      combatLog.appendChild(linebreak)
    }

    if (specialDamage == 1) {
      combatLog.append(specialMove + ' dealt 1 damage ')
      combatLog.appendChild(linebreak)
    } else if (specialDamage == 2) {
      combatLog.append(specialMove + ' dealt 2 damage ')
      combatLog.appendChild(linebreak)
    } else if (specialDamage == 3) {
      combatLog.append(specialMove + ' dealt 3 damage ')
      combatLog.appendChild(linebreak)
    } else if (specialDamage == 4) {
      combatLog.append(specialMove + ' dealt 4 damage ')
      combatLog.appendChild(linebreak)
    }
  }

  function handlePhysicalDamage(e) {
    let currentAiHP = aiHP - physicalDamage

    setAiHP(currentAiHP)
    aiFaint(currentAiHP)
    combatLogger(e)
    turn = false
    cpuTurn()
    aiAttack()
  }

  function handleSpecialDamage(e) {
    let currentAiHP = aiHP - specialDamage

    setAiHP(currentAiHP)
    aiFaint(currentAiHP)
    combatLogger(e)
    turn = false
    cpuTurn()
    aiAttack()
  }

  function playerTurn() {
    combatLog.append('Players turn, choose an attack ')
    combatLog.appendChild(linebreak)
  }

  function cpuTurn() {
    combatLog.append('CPU turn ')
    combatLog.appendChild(linebreak)
  }

  //AI
  function aiAttack() {
    let attackChoice = Math.floor(Math.random() * 10)
    playerTurn()
    if (attackChoice > 5) {
      let currentUserHP = userHP - aiSpecialDamageCalc()
      setUserHP(currentUserHP)
      userFaint(currentUserHP)
      combatLog.appendChild(linebreak)
      combatLog.append('CPU used ' + specialMove)
    } else {
      let currentUserHP = userHP - aiPhysicalDamageCalc()
      setUserHP(currentUserHP)
      userFaint(currentUserHP)
      combatLog.appendChild(linebreak)
      combatLog.append('CPU used ' + physicalMove)
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
    if (userPokehuman.attack > 75) {
      return (physicalDamage = Math.floor(Math.random() * 6))
    } else if (userPokehuman.attack > 50) {
      return (physicalDamage = Math.floor(Math.random() * 4))
    } else if (userPokehuman.attack > 25) {
      return (physicalDamage = Math.floor(Math.random() * 3))
    } else {
      return physicalDamage
    }
  }

  let specialDamage = 1

  const specialDamageCalc = () => {
    if (userPokehuman.spAttack > 75) {
      return (specialDamage = Math.floor(Math.random() * 6))
    } else if (userPokehuman.spAttack > 50) {
      return (specialDamage = Math.floor(Math.random() * 4))
    } else if (userPokehuman.spAttack > 25) {
      return (specialDamage = Math.floor(Math.random() * 3))
    } else {
      return specialDamage
    }
  }

  let aiPhysicalDamage = 1

  const aiPhysicalDamageCalc = () => {
    if (userPokehuman.attack > 75) {
      return (aiPhysicalDamage = Math.floor(Math.random() * 6))
    } else if (userPokehuman.attack > 50) {
      return (aiPhysicalDamage = Math.floor(Math.random() * 4))
    } else if (userPokehuman.attack > 25) {
      return (aiPhysicalDamage = Math.floor(Math.random() * 3))
    } else {
      return aiPhysicalDamage
    }
  }

  let aiSpecialDamage = 1

  const aiSpecialDamageCalc = () => {
    if (userPokehuman.spAttack > 75) {
      return (aiSpecialDamage = Math.floor(Math.random() * 6))
    } else if (userPokehuman.spAttack > 50) {
      return (aiSpecialDamage = Math.floor(Math.random() * 4))
    } else if (userPokehuman.spAttack > 25) {
      return (aiSpecialDamage = Math.floor(Math.random() * 3))
    } else {
      return aiSpecialDamage
    }
  }

  const aiFaint = (currentAiHP) => {
    if (currentAiHP <= 0) {
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
    if (currentUserHP <= 0) {
      location.state.shift()
      if (location.state.length === 0) {
        alert('You have lost the battle')
      }
      setUserHP(10)
    }
  }

  return (
    <>
      <div className="battle-title">
        <h1>The Battle Games</h1>
      </div>
      <div className="game-container">
        <div className="player-container">
          <img
            className="battle-images"
            src={userPokehuman?.image}
            alt="A human pokehuman"
          />
          <p>{userPokehuman?.name}</p>
          <p className="health">{userHP}</p>
          <button onClick={handlePhysicalDamage}>
            {physicalMove}
            {physicalDamageCalc()}
          </button>
          <button onClick={handleSpecialDamage}>
            {specialMove}
            {specialDamageCalc()}
          </button>
        </div>
        <div className="combat" id="combat-log"></div>
        <div className="ai-container">
          <img
            className="battle-images"
            src={aiPokehuman?.image}
            alt="ai Pokehuman"
          />
          <p className="health">{aiHP}</p>
          <p>{aiPokehuman?.name}</p>
        </div>
      </div>
    </>
  )
}
