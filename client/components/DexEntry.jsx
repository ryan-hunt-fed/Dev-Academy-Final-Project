import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import { getDexEntryAPI } from '../apis/dexentry'

export default function DexEntry() {
  const [pokehuman, setPokehuman] = useState()
  const { id } = useParams()

  const handleClick = async () => {
    const entry = await getDexEntryAPI(id)
    console.log(entry)
    setPokehuman(entry)
  }

  return (
    <>
      <div>DexEntry</div>
      <button onClick={handleClick}>Click me</button>
      <img src={pokehuman?.image} alt="A pokehuman!" />
      <h1>{pokehuman?.name}</h1>
      <h4>Type: {pokehuman?.type_1}</h4>
      <h4>Type: {pokehuman?.type_2}</h4>
      <h4>HP: {pokehuman?.HP}</h4>
      <h4>Attack: {pokehuman?.attack}</h4>
      <h4>Defence: {pokehuman?.defence}</h4>
      <h4>Special Attack: {pokehuman?.Sp_attack}</h4>
      <h4>Special Defence: {pokehuman?.Sp_defence}</h4>
      <h4>Speed: {pokehuman?.speed}</h4>
    </>
  )
}
