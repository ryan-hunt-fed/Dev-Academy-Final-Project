import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
import AddPokeHumans from './AddPokeHumans'
import Dex from './Dex'
import DexEntry from './DexEntry'


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
        <Route path='/dex' element={<Dex />}/>
        <Route path="/dex/:id" element={<DexEntry />} />
      </Routes>
    </>
  )
}

export default App
