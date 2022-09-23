import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <div className="nav-container">
        <Link to="/">Home</Link>
        <Link to="/dex">Dex</Link>
        <Link to="/add">Add</Link>
        <Link to="/about">About</Link>
        <Link to="/battle">Battle</Link>
      </div>
    </>
  )
}

export default Nav
