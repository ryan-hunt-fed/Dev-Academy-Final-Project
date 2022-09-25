import React from 'react'

function AiPokehumanOne({ pokehuman }) {
  return (
    <div>
      <img src={pokehuman?.image} alt="Ai Pokehuman" />
      <p>{pokehuman?.name}</p>
      <p>{pokehuman?.HP}</p>
    </div>
  )
}

export default AiPokehumanOne
