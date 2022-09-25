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

  // let turn = true

  // function handleTurn() {
  //   turn = !turn
  // }

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

  const physicalMove = physicalMoveArr[Math.floor(Math.random() * physicalMoveArr.length)] 
  const specialMove = specialMoveArr[Math.floor(Math.random() * specialMoveArr.length)]

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


  const [alive, setAlive] = useState(true)
  const [active, setActive] = useState(true)
  

  // pokehuman dies
 const faint = () => {

  //player health 
  if (pokehumans.HP <= 0 ) {
    // console.log(pokehuman.name, 'has died')
    setAlive(false)
    for (i = 0; i = pokehumans.length; i++){
      if (alive = false) {
        console.log('You Lose')
      }
    }
  }

  //Ai health - need to differentiate between pokehuman ai and player
  else if (pokehumans.HP <= 0) {
    // console.log(pokehuman.name, 'has died')
    setAlive(false)
    if (alive = false) {
      console.log('You Win')
    }
  }

 }

 //switch pokehumans
function switchPokehuman () {
  if (active = false) {
    return setActive(true)
  }
  else if (active = true){
    return setActive(false)
  }
 
}


  

  return (
    <>
      <div>BattleScreen</div>
      {location.state && (
        <>
          <PokeHumanOne pokehuman={location.state[0]} />
          <button>
          {physicalMove}
          {physicalDamageCalc()}
        </button>
        <button>
          {specialMove}
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
      <button onClick={generateAiTeam}>Generate Opponents Team</button>
    </>
  )
}
