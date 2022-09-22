import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <div className="nav-container">
        <Link to="/">Home</Link>
        <Link to="/dex">Dex</Link>
        <Link to="/add">Add</Link>
        <Link to="/dex/1">Yo</Link>
      </div>
    </>
  )
}

export default Nav
