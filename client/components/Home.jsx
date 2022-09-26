import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
  const state = useSelector((state) => state)
  return (
    <>
      <div className="title-container">
        <img src="./images/Pokehuman-title.png" alt="Pokehuman"></img>
      </div>

      <div className="theme-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/kTHNpusq654"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="intro-container">
        <h4>Welcome to PokeHuman, From FameGreak Studios</h4>

        <p>
          Pokemon have finally risen up and have decided to be the new Pokemon
          masters. They have created a new Pokedex filled with Pokehumans and
          much like their previous rulers have chosen to make their Pokehumans
          fight one another. In this app you can view and add Pokehumans to the
          Dex, then set your Pokehumans against each other in the battle games.
        </p>
      </div>
    </>
  )
}

export default Home
