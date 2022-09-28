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
  const [userHP, setUserHP] = useState(userPokehuman?.HP)
  const [aiHP, setAiHP] = useState()
  const [moves, setMoves] = useState([])

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

  // COMBAT LOG

  // COMBAT LOG VARIABLES
  const combatLog = document.getElementById('combat-log')
  const linebreak = document.createElement('br')

  function combatLogger(e) {
    const phyUsedPara = document.createElement('p')
    const phyDmgDealtPara = document.createElement('p')
    const spcUsedPara = document.createElement('p')
    const spcDmgDealtPara = document.createElement('p')
    const aiFaintP = document.createElement('p')
    aiFaintP.classList.add('ai-faint')

    window.setInterval(function () {
      combatLog.scrollTop = combatLog.scrollHeight
    }, 1000)

    if (e.target.id == 'physical-move') {
      phyUsedPara.innerHTML = `Player used ${moves[0]}`
      combatLog.append(phyUsedPara, linebreak)
      phyDmgDealtPara.innerHTML = `${moves[0]} dealt ${physicalDamage} damage!`
      combatLog.append(phyDmgDealtPara, linebreak)
    } else if (e.target.id == 'special-move') {
      spcUsedPara.innerHTML = `Player used ${moves[1]}`
      combatLog.append(spcUsedPara, linebreak)
      spcDmgDealtPara.innerHTML = `${moves[1]} dealt ${specialDamage} damage!`
      combatLog.append(spcDmgDealtPara, linebreak)
    }
  }

  function handlePhysicalDamage(e) {
    let currentAiHP = aiHP - physicalDamage
    setAiHP(currentAiHP)
    aiFaint(currentAiHP)
    combatLogger(e)
    cpuTurn()
    aiAttack()
  }

  function handleSpecialDamage(e) {
    let currentAiHP = aiHP - specialDamage
    setAiHP(currentAiHP)
    aiFaint(currentAiHP)
    combatLogger(e)
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

  useEffect(() => {
    setMoves([physicalMove, specialMove])
  }, [])

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
    const aiFaintP = document.createElement('p')
    const victoryP = document.createElement('p')
    aiFaintP.classList.add('ai-faint')

    if (currentAiHP <= 0) {
      aiFaintP.innerHTML = `You have defeated ${aiPokehuman.name}`
      combatLog.append(aiFaintP, linebreak)
      aiTeam.shift()
      if (aiTeam.length === 0) {
        // need to change to a victory screen here
        victoryP.innerHTML = `You are the winner!`
        combatLog.append(victoryP, linebreak)
        victory = true
      } else {
        console.log(aiHP)
      }
      setAiHP(10)
    }
  }

  const userFaint = (currentUserHP) => {
    const userFaintP = document.createElement('p')
    userFaintP.classList.add('user-faint')

    if (currentUserHP <= 0) {
      userFaintP.innerHTML = `${userPokehuman.name} has fainted`
      combatLog.append(userFaintP, linebreak)
      location.state.shift()
      setUserHP(10)
      setMoves([physicalMove, specialMove])
    }
  }

  const userVictoryCheck = () => {
    if (aiPokehuman === undefined) {
      return (
        <>
          <h2 className='title-font pokehuman-text'>Victory!</h2>
          <img
            src="https://c.tenor.com/tZVpbfTIjNMAAAAC/pikachu.gif"
            className="battle-images"
            alt="Youwon.gif"
          />
        </>
      )
    } else if (userPokehuman === undefined) {
      return (
        <>
          <h2 className='title-font pokehuman-text'>Defeat!</h2>
          <img
            src="https://c.tenor.com/WUEKqaYhVsUAAAAC/pokemon-sad.gif"
            className="battle-images"
            alt="Youlost.gif"
          />
        </>
      )
    } else {
      return (
        <>
          <h2 className='title-font pokehuman-text'>Pokehumans left: {location.state.length}</h2>
          <img
            className="battle-images"
            src={userPokehuman?.image}
            alt="A human pokehuman"
          />
          <p className="pokehuman-text title-font">{userPokehuman?.name}</p>
          <p className="health title-font">{userHP}</p>
          <button className='title-font' id="physical-move" onClick={handlePhysicalDamage}>
            {moves[0]}
            {physicalDamageCalc()}
          </button>
          <br />
          <button className='title-font' id="special-move" onClick={handleSpecialDamage}>
            {moves[1]}
            {specialDamageCalc()}
          </button>
        </>
      )
    }
  }

  const aiVictoryCheck = () => {
    if (userPokehuman === undefined) {
      return (
        <>
          <h2 className='title-font pokehuman-text'>Victory!</h2>
          <img
            src="https://c.tenor.com/tZVpbfTIjNMAAAAC/pikachu.gif"
            className="battle-images"
            alt="Youwon.gif"
          />
        </>
      )
    } else if (aiPokehuman === undefined) {
      return (
        <>
          <h2 className='title-font pokehuman-text'>Defeat!</h2>
          <img
            src="https://c.tenor.com/WUEKqaYhVsUAAAAC/pokemon-sad.gif"
            className="battle-images"
            alt="Youlost.gif"
          />
        </>
      )
    } else {
      return (
        <>
          <h2 className='title-font pokehuman-text'>Pokehumans left: {location.state.length}</h2>
          <img
            className="battle-images"
            src={aiPokehuman?.image}
            alt="A human pokehuman"
          />
          <p className="pokehuman-text title-font">{aiPokehuman?.name}</p>
          <p className="health title-font">{aiHP}</p>
        </>
      )
    }
  }

  return (
    <>
      <div className="background">
        <div className="battle-title">
          <h1 className='title-font'>The Battle Games</h1>
        </div>
        <div className="game-container">
          <div className="player-container">{userVictoryCheck()}</div>
          <div className="combat-log" id="combat-log"></div>
          <div className="ai-container">{aiVictoryCheck()}</div>
        </div>
      </div>
    </>
  )
}
