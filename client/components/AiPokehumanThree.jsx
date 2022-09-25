import React from 'react'

function AiPokehumanThree({ pokehuman }) {
  return (
    <div>
      <img src={pokehuman?.image} alt="Ai Pokehuman" />
      <p>{pokehuman?.name}</p>
      <p>{pokehuman?.HP}</p>
    </div>
  )
}

export default AiPokehumanThree
