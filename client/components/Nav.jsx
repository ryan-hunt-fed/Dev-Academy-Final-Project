import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { logoutUser } from '../actions/auth'

function Nav() {
  const navigateTo = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)

  const logout = () => {
    const confirmSuccess = () => navigateTo('/')
    dispatch(logoutUser(confirmSuccess))
  }
  return (
    <>
      <div className="nav-container">
        <div className="nav-main">
          <Link to="/">Home</Link>
          <Link to="/dex">Dex</Link>
          <Link to="/add">Add</Link>
          <Link to="/team">Team Select</Link>
          <Link to="/about">About</Link>

          {auth.isAuthenticated ? (
            <>
              <Link to={`/userteam/${auth.user.id}`}>My Team</Link>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="logout-a">
          {auth.isAuthenticated ? (
            <>
              <Link to="/" onClick={logout}>
                Logout
              </Link>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  )
}

export default Nav
