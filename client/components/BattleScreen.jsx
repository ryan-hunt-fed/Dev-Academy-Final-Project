import React from 'react'

export default function BattleScreen() {
  return (
    <>
      <div>BattleScreen</div>
      <div>
        Here is where we will show two pokehumans battling each other. One will
        be player controlled and the other will be run by the computer. You will
        be able to win or lose battles and use random teams. If users are
        implemented you will be able to save teams and battle using your custom
        teams.
      </div>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/018_f2.png"
        alt="pidgeot"
      />
      <img
        src="https://archives.bulbagarden.net/media/upload/thumb/b/b8/059Arcanine.png/1200px-059Arcanine.png"
        alt="Arcanine"
      />
      <div>These are placeholder images for where the teams might appear</div>
      <button>Generate Team</button>
      <button>Physical Attack</button>
      <button>Special Attack</button>
    </>
  )
}
