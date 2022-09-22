import React from 'react'

function Home() {
  return (
    <>
      {/* <Nav /> */}
      <div className='title-container'>
      <img className='title' src='./images/Pokehuman-title.png' alt='Pokehuman'></img>
      </div>
      
      {/* theme */}
      <div className='theme-container'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/kTHNpusq654" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      {/* about */}
      <div className='intro-container'>
      <h4 className='intro'>Welcome to PokeHuman,</h4> 
      <div className='intro-text-container'>
      <p className='intro'>Pokemon have finally risen up and have decided to be the new Pokemon masters. They have created a new Pokedex filled with Pokehumans and much like their previous rulers have chosen to make their Pokehumans fight one another. In this app you can view and add Pokehumans to the Dex, you can then set your Pokehumans against each other in the battle games</p>
      </div>
      </div>
    </>
  )
}

export default Home