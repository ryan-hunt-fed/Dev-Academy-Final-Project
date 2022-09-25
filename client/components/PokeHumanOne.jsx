import React from 'react'

export default function PokeHumanOne(props) {


  return (
    <>
      <div>
        <img src={props?.pokehuman.image} alt="some words" />
        <p>{props?.pokehuman.name}</p>
        <p>{props?.pokehuman.HP}</p>

        {/* <button>
          {physicalMove}
          {physicalDamageCalc()}
        </button>
        <button>
          {specialMove}
          {specialDamageCalc()}
        </button> */}
      </div>
    </>
  )
}
