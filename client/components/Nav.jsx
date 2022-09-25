import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../actions/auth'

function Nav() {
  const navigateTo = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector((redux) => redux.auth)

  const logout = () => {
    const confirmSuccess = () => navigateTo('/')
    dispatch(logoutUser(confirmSuccess))
  }

  return (
    <>
      <div className="nav-container">
        <Link to="/">Home</Link>
        <Link to="/dex">Dex</Link>
        <Link to="/add">Add</Link>
        <Link to="/about">About</Link>
        <Link to="/team">Team Select</Link>
        <Link to="/battle">Battle</Link>
        {auth.isAuthenticated ? (
          <Link to="/" onClick={logout}>
            Logout
          </Link>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </>
  )
}

export default Nav
