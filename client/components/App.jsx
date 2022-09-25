import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Home from './Home'
import Nav from './Nav'
import AddPokeHumans from './AddPokeHumans'
import Dex from './Dex'
import DexEntry from './DexEntry'
import About from './About'
import BattleScreen from './BattleScreen'
import TeamSelect from './TeamSelect'
import Login from './Login'
import Register from './Register'

import { checkAuth } from '../actions/auth'

function App() {
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)

  useEffect(() => {
    const confirmSuccess = () => {}
    dispatch(checkAuth(confirmSuccess))
  }, [])

  return (
    <>
      <header className="header">
        <Nav />
      </header>

      {/* <section className="main"></section> */}
      <Routes>
        <Route path="/" element={auth.isAuthenticated ? <Home /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
