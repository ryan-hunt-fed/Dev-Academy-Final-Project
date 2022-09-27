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

  // COMBAT LOG VARIABLES
  const combatLog = document.getElementById('combat-log')
  const linebreak = document.createElement('br')

  function combatLogger(e) {
    const phyUsedPara = document.createElement('p')
    const phyDmgDealtPara = document.createElement('p')
    const spcUsedPara = document.createElement('p')
    const spcDmgDealtPara = document.createElement('p')

    window.setInterval(function () {
      combatLog.scrollTop = combatLog.scrollHeight
    }, 1000)

    if (e.target.id == 'physical-move') {
      phyUsedPara.innerHTML = `Player used ${physicalMove}`
      combatLog.append(phyUsedPara, linebreak)
      phyDmgDealtPara.innerHTML = `${physicalMove} dealt ${physicalDamage} damage!`
      combatLog.append(phyDmgDealtPara, linebreak)
    } else if (e.target.id == 'special-move') {
      spcUsedPara.innerHTML = `Player used ${specialMove}`
      combatLog.append(spcUsedPara, linebreak)
      spcDmgDealtPara.innerHTML = `${specialMove} dealt ${specialDamage} damage!`
      combatLog.append(spcDmgDealtPara, linebreak)
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
    const playerTurnP = document.createElement('p')

    playerTurnP.innerHTML = 'Players turn, choose an attack'
    combatLog.append(playerTurnP, linebreak)
  }

  function cpuTurn() {
    const cpuTurnP = document.createElement('p')

    cpuTurnP.innerHTML = 'CPU Turn'
    combatLog.append(cpuTurnP, linebreak)
  }

  //AI
  function aiAttack() {
    let attackChoice = Math.floor(Math.random() * 10)
    const cpuPhyP = document.createElement('p')
    const cpuSpcP = document.createElement('p')
    const cpuPhyDmg = document.createElement('p')
    const cpuSpcDmg = document.createElement('p')

    if (attackChoice > 5) {
      let aiSpecialDamage = aiSpecialDamageCalc()
      let currentUserHP = userHP - aiSpecialDamage
      setUserHP(currentUserHP)
      userFaint(currentUserHP)
      cpuPhyP.innerHTML = `CPU used ${physicalMove}`
      combatLog.append(cpuPhyP, linebreak)
      cpuPhyDmg.innerHTML = `${physicalMove} dealt ${physicalDamage} damage!`
      combatLog.append(cpuPhyDmg, linebreak)
    } else {
      let aiPhysicalDamage = aiPhysicalDamageCalc()
      let currentUserHP = userHP - aiPhysicalDamage
      setUserHP(currentUserHP)
      userFaint(currentUserHP)
      cpuSpcP.innerHTML = `CPU used ${specialMove}`
      combatLog.append(cpuSpcP, linebreak)
      cpuSpcDmg.innerHTML = `${specialMove} dealt ${specialDamage} damage!`
      combatLog.append(cpuSpcDmg, linebreak)
    }
    playerTurn()
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

  let victory = false

  const aiFaint = (currentAiHP) => {
    if (currentAiHP <= 0) {
      aiTeam.shift()
      if (aiTeam.length === 0) {
        // need to change to a victory screen here
        victory = true
        console.log(victory)
        console.log(victory)
      } else {
        console.log(aiHP)
      }
      setAiHP(10)
    }
  }

  const userFaint = (currentUserHP) => {
    if (currentUserHP <= 0) {
      location.state.shift()
      if (location.state.length === 0) {
        alert('You have lost!')
      }
      setUserHP(10)
    }
  }
  console.log(location.state.length)

  return (
    <>
      <div className="background">
        <div className="battle-title">
          <h1 className='title-font'>The Battle Games</h1>
        </div>
        <div className="game-container">
          <div className="player-container">
            {aiPokehuman === undefined ? (
              <>
                <h2 className='title-font'>Victory!</h2>
                <img
                  src="https://c.tenor.com/tZVpbfTIjNMAAAAC/pikachu.gif"
                  className="battle-images"
                  alt="Youwon.gif"
                />
              </>
            ) : (
              <>
                <h2 className='title-font'>Pokehumans left: {location.state.length}</h2>
                <img
                  className="battle-images"
                  src={userPokehuman?.image}
                  alt="A human pokehuman"
                />
                <p className="pokehuman-text title-font">{userPokehuman?.name}</p>
                <p className="health title-font">{userHP}</p>
                <button id="physical-move" onClick={handlePhysicalDamage}>
                  {physicalMove}
                  {physicalDamageCalc()}
                </button>
                <br />
                <button id="special-move" onClick={handleSpecialDamage}>
                  {specialMove}
                  {specialDamageCalc()}
                </button>
              </>
            )}
          </div>
          <div className="combat-log" id="combat-log"></div>
          <div className="ai-container">
            {aiPokehuman === undefined ? (
              <>
                <h2 className='title-font'>Defeat!</h2>
                <img
                  src="https://c.tenor.com/WUEKqaYhVsUAAAAC/pokemon-sad.gif"
                  className="battle-images"
                  alt="Youlost.gif"
                />
              </>
            ) : (
              <>
                <h2 className='title-font'>Pokehumans left: {aiTeam.length}</h2>
                <img
                  className="battle-images"
                  src={aiPokehuman?.image}
                  alt="ai Pokehuman"
                />
                <p className="pokehuman-text title-font">{aiPokehuman?.name}</p>
                <p className="health title-font">{aiHP}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
