import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
import AddPokeHumans from './AddPokeHumans'
import Dex from './Dex'
import DexEntry from './DexEntry'
import About from './About'
import BattleScreen from './BattleScreen'
import TeamSelect from './TeamSelect'

function App() {
  return (
    <>
      <header className="header">
        <Nav />
      </header>

      {/* <section className="main"></section> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddPokeHumans />} />
        <Route path="/dex" element={<Dex />} />
        <Route path="/dex/:id" element={<DexEntry />} />
        <Route path="/about" element={<About />} />
        <Route path="/battle" element={<BattleScreen />} />
        <Route path="/team" element={<TeamSelect />} />
      </Routes>
    </>
  )
}

export default App
