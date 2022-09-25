import React from 'react'

export default function PokeHumanOne(props) {
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
    if (props.pokehuman.attack > 75) {
      return (physicalDamage = 4)
    } else if (props.pokehuman.attack > 50) {
      return (physicalDamage = 3)
    } else if (props.pokehuman.attack > 25) {
      return (physicalDamage = 2)
    } else {
      return physicalDamage
    }
  }

  let specialDamage = 1

  const specialDamageCalc = () => {
    if (props.pokehuman.spAttack > 75) {
      return (specialDamage = 4)
    } else if (props.pokehuman.spAttack > 50) {
      return (specialDamage = 3)
    } else if (props.pokehuman.spAttack > 25) {
      return (specialDamage = 2)
    } else {
      return specialDamage
    }
  }

  return (
    <>
      <div>
        <img src={props?.pokehuman.image} alt="some words" />
        <p>{props?.pokehuman.name}</p>
        <p>{props?.pokehuman.HP}</p>

        <button>
          {physicalMove}
          {physicalDamageCalc()}
        </button>
        <button>
          {specialMove}
          {specialDamageCalc()}
        </button>
      </div>
    </>
  )
}
